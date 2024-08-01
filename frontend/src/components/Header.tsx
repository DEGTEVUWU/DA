import { Link } from "react-router-dom";
import { routes } from "../routes";
import { ButtonComponent } from "./ButtonComponent";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const { t } = useTranslation();
  return (
    <header className="flex h-24 items-center px-8 bg-white drop-shadow-md justify-between">
      <div className="font-bold text-4xl text-sky-600">DA</div>
      <nav className="flex gap-2">
        <ButtonComponent variant="outline">Пользователи</ButtonComponent>
        <ButtonComponent variant="outline">Файлы</ButtonComponent>
        <Link to={routes.documentsRoute()}>
          <ButtonComponent variant="outline">Документы</ButtonComponent>
        </Link>
        <ButtonComponent variant="outline">Поиск</ButtonComponent>
      </nav>
      <div className="flex gap-2">
        <Link to={routes.signupRoute()}>
          <ButtonComponent variant="outline">{t('header.register')}</ButtonComponent>
        </Link>
        <Link to={routes.loginRoute()}>
          <ButtonComponent variant="outline">{t('header.login')}</ButtonComponent>
        </Link>
        <ButtonComponent variant="outline">{t('header.logout')}</ButtonComponent>
      </div>
    </header>
  )
};