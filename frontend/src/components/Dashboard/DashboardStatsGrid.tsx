import  { ReactNode } from 'react'
import { IoBagHandle } from 'react-icons/io5'

interface BoxWrapperProps {
    children: ReactNode // Sử dụng ReactNode cho children để cho phép bất kỳ thành phần React nào là children của BoxWrapper
}
function BoxWrapper({ children }:BoxWrapperProps){
    return <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">{children}</div>
}
function DashboardStatsGrid() {
    return (
        <div className="flex gap-2">
            <BoxWrapper>
                <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
                    <IoBagHandle className="text-2xl text-white" />
                </div>
                <div className="pl-4">
                    <span className="text-sm text-gray-500 font-light">Total Sales</span>
                    <div className="flex items-center">
                        <strong className="text-xl text-gray-700 font-semibold">$432.23</strong>
                        <span className="text-sm text-green-500 pl-2">+133</span>
                    </div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                <div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-600">
                    <IoBagHandle className="text-2xl text-white" />
                </div>
                <div className="pl-4">
                    <span className="text-sm text-gray-500 font-light">Total Sales</span>
                    <div className="flex items-center">
                        <strong className="text-xl text-gray-700 font-semibold">$432.23</strong>
                        <span className="text-sm text-green-500 pl-2">+133</span>
                    </div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                <div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-400">
                    <IoBagHandle className="text-2xl text-white" />
                </div>
                <div className="pl-4">
                    <span className="text-sm text-gray-500 font-light">Total Sales</span>
                    <div className="flex items-center">
                        <strong className="text-xl text-gray-700 font-semibold">$432.23</strong>
                        <span className="text-sm text-green-500 pl-2">+133</span>
                    </div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-600">
                    <IoBagHandle className="text-2xl text-white" />
                </div>
                <div className="pl-4">
                    <span className="text-sm text-gray-500 font-light">Total Sales</span>
                    <div className="flex items-center">
                        <strong className="text-xl text-gray-700 font-semibold">$432.23</strong>
                        <span className="text-sm text-green-500 pl-2">+133</span>
                    </div>
                </div>
            </BoxWrapper>
        </div>
    )
}



export default DashboardStatsGrid
