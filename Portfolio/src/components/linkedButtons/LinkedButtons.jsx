import LinkedButtonsItem from "../linkedButtonsItem/LinkedButtonsItem";
const LinkedButtons = ({ buttons }) => {
  const buttonsMapped = buttons.map((button) => (
    <LinkedButtonsItem
      key={button.id}
      id={button.id}
      name={button.name}
      link={button.link}
      logo={button.logo}
    />
  ));
  return <div className="flex gap-3">{buttonsMapped}</div>;
};
export default LinkedButtons;
