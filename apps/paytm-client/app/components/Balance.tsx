import { useBalance } from "../../../../packages/ui/src/hooks/useBalance";

export default function Balance(){
const balance = useBalance()
    return(
        <div>
            {balance}
        </div>
    )
}