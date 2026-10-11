# Soninho — Fernanda & Alice

Miniapp responsivo para registrar sono por **um toque** ou **manualmente**, compartilhado entre dois responsáveis, com histórico e média das últimas 7 noites completas. Horários são armazenados em ISO/UTC e apresentados no fuso local do dispositivo. Cada noite é identificada pela data em que começou.

## 1. Firebase

1. Crie um projeto no [Firebase Console](https://console.firebase.google.com/).
2. Em **Build > Authentication > Sign-in method**, habilite **Email/Password**.
3. Em **Authentication > Users**, crie dois usuários (um email e senha para cada responsável). **Importante:** a regra fornecida exige `email_verified=true`; para contas criadas manualmente no console, marque o email como verificado se a interface permitir. Alternativamente, substitua a condição `request.auth.token.email_verified == true &&` pela verificação da lista de emails, se os usuários forem criados manualmente e você controlar ambos os endereços.
4. Em **Firestore Database**, crie um banco no modo de produção.
5. Na aba **Rules**, cole `firestore.rules` após substituir `SUBSTITUIR_EMAIL_PAI` e `SUBSTITUIR_EMAIL_MAE` pelos emails exatos. Publique as regras.
6. Em **Project settings > Your apps**, crie um app Web e copie as credenciais de configuração.

## 2. Rodar localmente

Requer Node.js 20+.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Preencha `.env.local` com as credenciais do app Web Firebase. Abra http://localhost:3000.

## 3. Publicar na Vercel

1. Suba esta pasta em um repositório GitHub privado.
2. Em [Vercel](https://vercel.com/), clique **Add New > Project**, importe o repositório.
3. Cadastre as quatro variáveis `NEXT_PUBLIC_FIREBASE_*` em **Environment Variables**, com os valores de `.env.local`.
4. Clique **Deploy**. Em Firebase Authentication > Settings > Authorized domains, inclua o domínio gerado na Vercel se necessário.
5. Em cada celular, abra o endereço da Vercel e escolha **Adicionar à tela inicial** pelo navegador.

## Como usar

- **Dormiu agora**: salva a hora atual na noite da data corrente.
- **Acordou agora**: associa o despertar à noite com sono iniciado e ainda sem despertar; na falta de uma, antes das 15h considera a noite anterior.
- **Registrar / corrigir manualmente**: edita os horários da noite corrente; para outra data, use o histórico. Ao salvar, a data/hora do despertar deve ser posterior ao início.
- **Histórico**: mostra registros anteriores e a média das 7 últimas noites completas de cada criança.

## Atenção

- O app funciona com dados reais apenas após configurar Firebase; os dois usuários autorizados enxergam os mesmos dados.
- O botão de início do sono não impede sobrescrever um registro da mesma noite. Se clicar por engano, corrija pelo formulário manual.
- A primeira versão é voltada ao **sono noturno** (um registro por criança por data). Cochilos exigem ampliar o modelo de dados.
- Use email e senha fortes. Não publique `.env.local` no GitHub. As chaves públicas do Firebase não são segredo; a proteção dos dados depende principalmente das regras do Firestore.

## PWA: instalar nos celulares

O aplicativo possui manifesto Web App, ícones para Android e Apple Touch Icon para iPhone. Depois do deploy HTTPS na Vercel:

- **iPhone (Michelle):** abrir a URL no Safari → Compartilhar → Adicionar à Tela de Início → Adicionar. Fazer login no ícone instalado; a sessão do atalho pode ser independente da sessão anterior do Safari.
- **Android:** abrir a URL no Chrome → menu ⋮ → Instalar app (ou Adicionar à tela inicial). Fazer login se solicitado.

A autenticação Firebase persiste normalmente no dispositivo, salvo logout, limpeza dos dados ou políticas do navegador. O PWA **não possui modo offline**: é necessária conexão para registrar/sincronizar horários. Para atualização, basta dar push no GitHub; a Vercel publica automaticamente. Se o ícone não mudar imediatamente, remova o atalho antigo e adicione novamente.
