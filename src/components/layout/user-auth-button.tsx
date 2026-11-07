// Nút Đăng nhập Google / Hiển thị thông tin tài khoản học viên qua Auth0 (@auth0/nextjs-auth0)
"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import type { LanguageCode } from "@/types";

export const AUTH_UI_COPY: Record<
  LanguageCode,
  {
    loginGoogle: string;
    logout: string;
    signedInAs: string;
    quickFillHint: string;
  }
> = {
  en: {
    loginGoogle: "Sign in with Google",
    logout: "Log out",
    signedInAs: "Signed in as",
    quickFillHint:
      "Sign in with Google to auto-fill your name and email instantly.",
  },
  zh: {
    loginGoogle: "使用 Google 登录",
    logout: "退出登录",
    signedInAs: "当前登录：",
    quickFillHint: "使用 Google 登录可自动填写您的姓名和邮箱。",
  },
  ja: {
    loginGoogle: "Googleでログイン",
    logout: "ログアウト",
    signedInAs: "ログイン中：",
    quickFillHint:
      "Googleでログインすると、お名前とメールアドレスが自動入力されます。",
  },
  fr: {
    loginGoogle: "Connexion avec Google",
    logout: "Déconnexion",
    signedInAs: "Connecté(e) :",
    quickFillHint:
      "Connectez-vous avec Google pour remplir automatiquement votre nom et votre e-mail.",
  },
  ko: {
    loginGoogle: "Google로 로그인",
    logout: "로그아웃",
    signedInAs: "로그인 계정:",
    quickFillHint:
      "Google로 로그인하면 이름과 이메일이 자동으로 입력됩니다.",
  },
  ru: {
    loginGoogle: "Войти через Google",
    logout: "Выйти",
    signedInAs: "Вы вошли как",
    quickFillHint:
      "Войдите через Google, чтобы автоматически заполнить имя и e-mail.",
  },
  de: {
    loginGoogle: "Mit Google anmelden",
    logout: "Abmelden",
    signedInAs: "Angemeldet als",
    quickFillHint:
      "Melden Sie sich mit Google an, um Name und E-Mail automatisch auszufüllen.",
  },
};

interface UserAuthButtonProps {
  language?: LanguageCode;
  returnTo?: string;
}

export function UserAuthButton({
  language = "en",
  returnTo = "/",
}: UserAuthButtonProps) {
  const { user, isLoading } = useUser();
  const copy = AUTH_UI_COPY[language] || AUTH_UI_COPY.en;

  if (isLoading) {
    return null;
  }

  if (user) {
    return (
      <div className="auth-user-pill">
        {user.picture && (
          <img
            src={user.picture}
            alt={user.name || "User"}
            width={28}
            height={28}
            className="auth-avatar"
          />
        )}
        <span className="auth-user-name" title={user.email || user.name || ""}>
          {user.name || user.email}
        </span>
        <a className="auth-logout-link" href="/auth/logout">
          {copy.logout}
        </a>
      </div>
    );
  }

  const loginHref = `/auth/login?connection=google-oauth2&returnTo=${encodeURIComponent(
    returnTo
  )}`;

  return (
    <a className="btn-google-auth" href={loginHref}>
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <path
          fill="#4285F4"
          d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z"
        />
        <path
          fill="#34A853"
          d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09C3.26 21.3 7.31 24 12 24z"
        />
        <path
          fill="#FBBC05"
          d="M5.27 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.38l3.98-3.09z"
        />
        <path
          fill="#EA4335"
          d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96z"
        />
      </svg>
      <span>{copy.loginGoogle}</span>
    </a>
  );
}
