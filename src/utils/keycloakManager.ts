import Keycloak from 'keycloak-js';

// for LOGIN UI
import { getKcContext } from "keycloakify";

export const realm = 'Sample-realm';
export const encodedRealm = encodeURIComponent(realm);
export const publicClientId = 'public-client';
export const initOptions = { pkceMethod: 'S256' };

export const keycloak = Keycloak({
  realm,
  url: 'http://localhost:8085/auth',
  clientId: publicClientId,
});

export const { kcContext } = getKcContext<{
    pageId: "register.ftl";
    /**
     * Defined when you use the keycloak-mail-whitelisting keycloak plugin
     * (https://github.com/micedre/keycloak-mail-whitelisting)
     */
    authorizedMailDomains?: string[];
}>({
    // 아래 주석을 해제하여 로컬에서 로그인 페이지를 디버깅 할 수 있음 @cindy.choi
    "mockPageId": "login.ftl",
    /**
     * Customize the simulated kcContext that will let us
     * dev the page outside keycloak (with auto-reload)
     */
    "mockData": [
        {
            "pageId": "login.ftl",
            "social": {
                "providers": [
                    {
                        "alias": "google",
                        "displayName": "google",
                        "loginUrl": "#",
                        "providerId": "googleConnect",
                    },
                    {
                        "alias": "facebook",
                        "displayName": "facebook",
                        "loginUrl": "#",
                        "providerId": "facebookConnect",
                    },
                    {
                        "alias": "naver",
                        "displayName": "naver",
                        "loginUrl": "#",
                        "providerId": "naverConnect",
                    },
                ],
            },
        },
        {
            "pageId": "register.ftl",
            /* spell-checker: disable */
            "authorizedMailDomains": [
                "insee.fr",
                "gouv.fr",
                "casd.eu",
                "ensai.fr",
                "ensae.fr",
                "ars.sante.fr",
                "*.gouv.fr",
                "*.sante.gouv.fr",
                "sante.gouv.fr",
                "cnaf.fr",
                "*.cnaf.fr",
                "ac-lille.fr",
                "ac-amiens.fr",
                "ac-normandie.fr",
                "ac-reims.fr",
                "ac-nancy-metz.fr",
                "ac-strasbourg.fr",
                "ac-creteil.fr",
                "ac-paris.fr",
                "ac-versailles.fr",
                "ac-rennes.fr",
                "ac-nantes.fr",
                "ac-orleans-tours.fr",
                "ac-dijon.fr",
                "ac-besancon.fr",
                "ac-poitiers.fr",
                "ac-limoges.fr",
                "ac-clermont.fr",
                "ac-lyon.fr",
                "ac-grenoble.fr",
                "ac-bordeaux.fr",
                "ac-toulouse.fr",
                "ac-montpellier.fr",
                "ac-aix-marseille.fr",
                "ac-nice.fr",
                "ac-corse.fr",
                "ac-martinique.fr",
                "ac-guadeloupe.fr",
                "ac-reunion.fr",
                "ac-guyane.fr",
                "ac-mayotte.fr",
                "ac-wf.wf",
                "monvr.pf",
                "ac-noumea.nc",
                "ac-spm.fr",
                "*.ensai.fr",
            ],
            "realm": {
                "registrationEmailAsUsername": false,
            },
            /* spell-checker: enable */
        },
    ],
});

export type KcContextType = NonNullable<typeof kcContext>;
export default {
	keycloak,
	initOptions,
  encodedRealm,
	kcContext,
};
