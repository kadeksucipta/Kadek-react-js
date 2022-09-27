import { Provider } from "react-redux"
import Counters from "./pembahasan/Counters"
import store from "../../App/store"

const ReduxX = () => {
    return (
        <div>
            <Provider store={store}>
                <Counters />
            </Provider>
        </div>
    )
}
export default ReduxX