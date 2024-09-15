import { RESOURCES } from 'config/constants';

const Footer: FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <div className="footer">
      <span className="footer__description">{t('valletta_buildings')}</span>
      <span className="footer__description">
        {t('copyright_all_rights_reserved')}
      </span>
      <Flex gap={16}>
        <img src={RESOURCES.TWITTER} />
        <img src={RESOURCES.YOUTUBE} />
        <img src={RESOURCES.LINKEDIN} />
      </Flex>
    </div>
  );
};

export default Footer;
