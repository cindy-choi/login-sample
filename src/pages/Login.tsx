import React, { useState, useRef, useEffect, memo } from 'react';
import { kcContext } from '@/utils/keycloakManager';
import { useKcMessage } from 'keycloakify/lib/i18n/useKcMessage';
import type { KcProps } from 'keycloakify/lib/components/KcProps';
import type { KcContextType } from '@/utils/keycloakManager';
import { Button } from 'react-bootstrap';
import styles from './Login.module.scss'

type KcContext_Login = Extract<KcContextType, { pageId: 'login.ftl' }>;

export const Login = memo(
	({ kcContext, ...props }: { kcContext: KcContext_Login } & KcProps) => {
		const { msg, msgStr } = useKcMessage();
		const { social, realm, url, usernameEditDisabled, login, auth, registrationDisabled, } = kcContext;

    // TODO
		// const [isLoginButtonDisabled, setIsLoginButtonDisabled] = useState(false);
		// const usernameInputRef = useRef<HTMLInputElement>(null);
		// const passwordInputRef = useRef<HTMLInputElement>(null);
		// const submitButtonRef = useRef<HTMLButtonElement>(null);

    const handleClickSocial = (type: string) => {
      const { providers } = social;
      const target = providers?.find(socialItem => socialItem.alias === type);
      if (target) window.open(target.loginUrl);
    };

		return (
      <div className={styles.login}>
        <div className={styles.loginForm}>
          {/* TODO: logo */}
          <input placeholder="이메일 형식을 입력해주세요"/>
          <input placeholder="비밀번호를 입력해주세요"/>
          <Button variant="primary" className={styles.button}>로그인</Button>
          <div className={styles.links}>
            <Button variant="link" className={styles.link}>회원가입</Button>
            <Button variant="link" className={styles.link}>아이디/비밀번호 찾기</Button>
          </div>
          <div className={styles.socials}>
            <Button className={`${styles.socialButton} ${styles.google}`} onClick={() => handleClickSocial('google')}>
              구글 아이디로 로그인
            </Button>
            <Button className={`${styles.socialButton} ${styles.facebook}`} onClick={() => handleClickSocial('facebook')}>
              페이스북 아이디로 로그인
            </Button>
            <Button className={`${styles.socialButton} ${styles.naver}`} onClick={() => handleClickSocial('naver')}>
              네이버 아이디로 로그인
            </Button>
          </div>
        </div>
        <div className={styles.background} />

      </div>
    );
	},
);

export default Login;
