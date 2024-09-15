import { RESOURCES } from 'config/constants';
import { appInformation } from 'api/mock-data';

const Footer: FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <div className="footer">
      <Flex flex={1} justify="space-between">
        <Flex vertical gap={20}>
          <div>
            <img src={RESOURCES.LOGO} />
            <div className="footer__description">{t('valletta_buildings')}</div>
          </div>
          <Flex gap={16}>
            <img src={RESOURCES.TWITTER} />
            <img src={RESOURCES.YOUTUBE} />
            <img src={RESOURCES.LINKEDIN} />
          </Flex>
        </Flex>
        <Col span={14}>
          <Flex justify="center">
            {map(appInformation, ({ title, contents }, index) => (
              <Flex key={index} vertical gap={20} flex={1}>
                <span className="footer__info-title">{title}</span>
                <Flex vertical gap={10}>
                  {map(contents, (content, idx) => (
                    <span className="footer__info-content" key={idx}>
                      {content}
                    </span>
                  ))}
                </Flex>
              </Flex>
            ))}
          </Flex>
        </Col>
      </Flex>
      <AntDivider />
      <span className="footer__text">{t('copyright_all_rights_reserved')}</span>
    </div>
  );
};

export default Footer;
