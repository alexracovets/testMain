import { useTranslation } from "react-i18next";

import s from './MainTexts.module.scss';
export default function MainTexts() {
    const { t } = useTranslation();

    return (
        <h2 className={s.main_text} dangerouslySetInnerHTML={{ __html: t("main_text") }} />
    )
} 