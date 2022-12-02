import MoreInfoDelivery from "../../components/MoreInfo/MoreInfoDelivery.js";
import MoreInfoExchanges from "../../components/MoreInfo/MoreInfoExchanges.js";
import MoreInfoHeadline from "../../components/MoreInfo/MoreInfoHeadline.js";
import MoreInfoRefunds from "../../components/MoreInfo/MoreInfoRefunds.js";
import MoreInfoRights from "../../components/MoreInfo/MoreInfoRights.js";
import MoreInfoSale from "../../components/MoreInfo/MoreInfoSale.js";
import MoreInfoShipping from "../../components/MoreInfo/MoreInfoShipping.js";
import MoreInfoIntro from "../../components/MoreInfo/MoreInfoIntro.js";
import "../../templates/MoreInfo/MoreInfoFaq.css";



const Moreinfo = () => {
    return ( 
        <div className="moreinfopara">
            <MoreInfoHeadline/>
            <MoreInfoIntro/>
            <MoreInfoRefunds/>
            <MoreInfoShipping/>
            <MoreInfoDelivery/>
            <MoreInfoRights/>
            <MoreInfoSale/>
            <MoreInfoExchanges/>
        </div>
     );
}
 
export default Moreinfo;