import Iroute from "../interfaces/route";
import Contato from "../pages/Contato";
import Inicio from "../pages/Inicio";
import SobreMim from "../pages/SobreMim";

const routes: Iroute[] = [
    {
        path: '/',
        name: 'Inicio',
        component: Inicio,
    },
    {
        path: '/contato',
        name: 'Contato',
        component: Contato,
    },
    {
        path: '/sobre',
        name: 'SobreMim',
        component: SobreMim,
    }
]
