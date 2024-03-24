import { SelectedPage } from "@/shared/enum";
import AnchorLink from "react-anchor-link-smooth-scroll"


type Props = {
    page:string;
    selectedPage:SelectedPage;
    setSelected:(value:SelectedPage)=>void
}

const Link = ({page,selectedPage,setSelected}: Props) => {
    const lowerPage=page.toLowerCase().replace(/ /g,"") as SelectedPage;
  return (
    <div>
        <AnchorLink
        className={`${selectedPage===lowerPage?"text-primary-500":""}
        transition duration-500 hover:text-primary-300
        `}
        href={`#${lowerPage}`}
        onClick={()=>setSelected(lowerPage)}
        >
            {page}
        </AnchorLink>
    </div>
  )
}

export default Link