import BuyerProfilePieChart from "../components/Dashboard/BuyerProfilePieChart"
import DashboardStatsGrid from "../components/Dashboard/DashboardStatsGrid"
import PopularProducts from "../components/Dashboard/PopularProducts"
import RecentOrders from "../components/Dashboard/RecentOrders"
import TransactionChart from "../components/Dashboard/TransactionChart"


function Dashboard() {
    return (
        <div className="flex flex-col gap-4">
            <DashboardStatsGrid />
            <div className="grid xl:flex xl:flex-row gap-4 w-full">
                <TransactionChart />
                <BuyerProfilePieChart/>
            </div>
            <div className='grid xl:flex xl:flex-row gap-4 w-full'>
                <RecentOrders/>
                <PopularProducts/>
            </div>
        </div>
    )
}

export default Dashboard
