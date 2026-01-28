import s from './card.module.css'



export const Card = ({imagem, nome, especie}) => {
    return (
        <>
            <img className={s.imgem} src={imagem} alt={nome} />
            <h2>{nome}</h2>
            <h3>{especie}</h3>
        </>
    );
        
};