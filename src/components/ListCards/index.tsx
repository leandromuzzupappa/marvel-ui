import Card from 'components/Card';
import Title from 'components/Title';
import { IListCards } from 'utils/interfaces/generalInterfaces';

const ListCards = ({ title, data, classes, urlBasePath }: IListCards) => {
  return (
    <section className={`listcards ${classes ? classes : ''}`}>
      <Title megaTitle>
        <span>{title}</span>
      </Title>
      <div className="wrapper">
        {data.map((item: any) => {
          const title = item.title ?? item.name;

          return (
            <Card
              key={item.id}
              title={title}
              thumbnail={item.thumbnail}
              url={`${urlBasePath}/${item.id}`}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ListCards;
