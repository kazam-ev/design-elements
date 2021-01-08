import Card from "./Card"
import Midtext from "./Midtext"

const CardList = () => {

    const text ="RESOURCES FROM RESTAURENT";
    const url = "https://images.unsplash.com/photo-1573668200361-62e141908294?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzN8fHJlc3RhdXJhbnR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    
    return (
        <div>
            <Midtext text={text} />
            <div className="row finalrow">
                <div className="col sm-12 md-6 lg-4 cardmargin">
                    <Card  cardText={"Restaurent and charging"} cardTitle={"Card 1"} imgUrl={url} />
                </div>
                <div className="col sm-12 md-6 lg-4">
                    <Card  cardText={"Restaurent and charging"} cardTitle={"Card 1"} imgUrl={url} />
                </div>
                <div className="col sm-12 md-6 lg-4">
                    <Card  cardText={"Restaurent and charging"} cardTitle={"Card 1"} imgUrl={url} />
                </div>
            </div>
        </div>
    );
}

export default CardList;