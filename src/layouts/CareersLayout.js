import { Outlet } from 'react-router-dom'

export default function CareersLayout() {
    return (
        <div className='careers-layout'>

            <h2>Careers</h2>
            <p>Adipisicing est quis duis voluptate aliqua do exercitation pariatur commodo consectetur nulla do.</p>

            <Outlet />

        </div>
    )
}