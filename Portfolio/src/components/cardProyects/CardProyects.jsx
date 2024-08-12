import CardProyectItem from "../cardProyectItem/CardProyectItem";
import { proyects } from "../../mocks/proyectos";

const CardProyects = () => {
  return (
    <div className="grid grid-cols-1 gap-8">
      {proyects.map((proyect, index) => (
        <CardProyectItem
          key={index}
          urlImage={proyect.urlImage}
          name={proyect.name}
          description={proyect.description}
          tecnologias={proyect.tecnologias}
        />
      ))}
    </div>
  );
};

export default CardProyects;
