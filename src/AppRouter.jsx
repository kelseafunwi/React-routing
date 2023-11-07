import { 
    createBrowserRouter,
    createRoutesFromElements,
    redirect,
    Route,
} from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Data, { dataFetcher } from "./Data";
import Root from "./Root";
import ErrorElement from "./ErrorElement";
import './App.css'

 
export const Router = createBrowserRouter(
    createRoutesFromElements(
        // Externally, this is the part to the home location
        <Route 
        path='/'    
        element={<Root />}
        errorElement={<ErrorElement />}>

            <Route index element={<Home />} />
            <Route path="/contact" element={<Contact />}/>
            <Route path="/data" element={<Data />} loader={dataFetcher} />
            <Route 
                // loader is the function will run before the class is loaded
                loader={(params) => {params.projectId; params.taskId}}
                path='projects/:projectId/tasks/:taskId'
                element={<h1>Project Task</h1>} />
            <Route 
                path="dashboard"
                loader={async () => {
                    const res = await fetch('api/userinfo');
                    const user = await res.json();
                
                    if (!user) {
                        throw redirect('/login');
                    } else {
                        return {user, state: 'successfull'};
                    }
                } } />
        </Route>
    )
)