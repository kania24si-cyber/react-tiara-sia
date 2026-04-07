import { createRoot} from 'react-dom/client';
import FrameworkList from './FrameworkList';
import './tailwind.css';
import FrameworkListSearchFilter from './FrameworkListSearchFilter';
import ResponsiveGrid from './ResponsiveGrid';

createRoot(document.getElementById('root'))
.render(
    <div>
       <ResponsiveGrid/>
    </div>
)