import MoreInfoDelivery from "../../components/MoreInfo/MoreInfoDelivery.js";
import MoreInfoExchanges from "../../components/MoreInfo/MoreInfoExchanges.js";
import MoreInfoHeadline from "../../components/MoreInfo/MoreInfoHeadline.js";
import MoreInfoRefunds from "../../components/MoreInfo/MoreInfoRefunds.js";
import MoreInfoRights from "../../components/MoreInfo/MoreInfoRights.js";
import MoreInfoSale from "../../components/MoreInfo/MoreInfoSale.js";
import MoreInfoShipping from "../../components/MoreInfo/MoreInfoShipping.js";



const Moreinfo = () => {
    return ( 
        <div>
            <MoreInfoHeadline/>
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