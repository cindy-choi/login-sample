import { useEffect, memo } from "react";
import { defaultKcProps } from "keycloakify";
import Login from "@/pages/Login";

import type { KcContextType } from "@/utils/keycloakManager";

type Props = {
    kcContext: KcContextType;
};

// login 페이지만 커스텀
export const KeycloakApp = memo(({ kcContext }: { kcContext: KcContextType; }) => {
	switch (kcContext.pageId) {
		case "login.ftl": return <Login {...{ kcContext, ...defaultKcProps }} />;
		// case "register.ftl": return <Register {...{ kcContext, ...props }} />;
		// case "info.ftl": return <Info {...{ kcContext, ...props }} />;
		// case "error.ftl": return <Error {...{ kcContext, ...props }} />;
		// case "login-reset-password.ftl": return <LoginResetPassword {...{ kcContext, ...props }} />;
		// case "login-verify-email.ftl": return <LoginVerifyEmail {...{ kcContext, ...props }} />;
		// case "terms.ftl": return <Terms {...{ kcContext, ...props }} />;
		// case "login-otp.ftl": return <LoginOtp {...{ kcContext, ...props }} />;
		// case "login-update-profile.ftl": return <LoginUpdateProfile {...{ kcContext, ...props }} />;
		// case "login-idp-link-confirm.ftl": return <LoginIdpLinkConfirm {...{ kcContext, ...props }} />;
		// case "my-extra-page-1.ftl": return <MyExtraPage1 {...{ kcContext, ...props }} />;
		// case "my-extra-page-2.ftl": return <MyExtraPage2 {...{ kcContext, ...props }} />;
		default:
			return (<div>error</div>);
	}
});

export default KeycloakApp;
