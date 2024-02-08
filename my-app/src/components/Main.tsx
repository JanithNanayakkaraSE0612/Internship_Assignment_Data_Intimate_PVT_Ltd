import React from 'react'
import { FaRegCalendarMinus, FaEllipsisV } from "react-icons/fa"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, Sector } from 'recharts';
import { Progress } from 'antd';
import {FaClipboardList} from "react-icons/fa";
import {TiMessages} from "react-icons/ti";
import {MdOutlineAttachMoney} from "react-icons/md";
import {FaCalendar} from "react-icons/fa";
import Image from 'next/image'
import PieComponent from './PieComponent';

const datas = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];




const Main = () => {



    return (
        <div className='px-[25px] pt-[25px] bg-slate-250 pb-[40px]'>
            <div className='flex items-center justify-between'>
                <h1 className='text-[28px] leading-[34px] font-normal text-[#5a5c69] cursor-pointer'>Dashboard</h1>

                <button className='bg-[#2E59D9] h-[32px] rounded-[3px] text-white flex items-center justify-center px-[8px]'>Generate Report</button>
            </div>
            <div className='grid grid-cols-4 gap-[30px] mt-[25px] pb-[15px]'>
                {/* <div className=' h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out'>
                    <div>
                        <h2 className='text-[#B589DF] text-[11px] leading-[17px] font-bold'>EARNINGS (MONTHLY)</h2>
                        <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>$40,000</h1>
                    </div>
                    <FaRegCalendarMinus fontSize={28} color="" />

                </div> */}
                         <div
                        className="flex  w-full h-28 p-4 border-l-8 border-[#4e73df] rounded-lg shadow-2xl bg-white border-e-gray-300">
                        <div className={"flex flex-wrap w-10/12 "}>
                            <p className={"flex-row w-full text-[#4e73df] text-[14px] "}>EARNINGS (MONTHLY)</p>
                            <p className={"text-gray-600 font-bold"}>$40,000</p>
                        </div>

                        <div className={"flex w-2/12 text-gray-600 text-4xl justify-center items-center opacity-50"}>
                            <FaCalendar/>
                        </div>
                    </div>
                <div
                        className="flex w-full h-28 p-4 border-l-8 border-[#1cc88a] rounded-lg shadow-2xl bg-white border-e-gray-300">
                        <div className={"flex flex-wrap w-10/12 "}>
                            <p className={" flex-row w-full text-[#1cc88a] text-[14px] "}>EARNINGS (ANNUAL)</p>
                            <p className={"text-gray-600 font-bold"}>$215,000</p>
                        </div>

                        <div className={"flex w-2/12 text-gray-600 text-4xl justify-center items-center opacity-50"}>
                            <MdOutlineAttachMoney/>
                        </div>
                    </div>
            
                   <div
                        className="flex w-full h-28 p-4 border-l-8 border-[#36b9cc] rounded-lg shadow-2xl bg-white border-e-gray-300">

                        <div className={"flex flex-wrap w-10/12"}>
                            <p className={"flex-row w-full text-[#36b9cc] text-[14px]"}>TASKS</p>

                            <div className={"flex flex-row w-full items-center text-gray-600 font-bold"}>
                                <div className="w-4/12 flex items-center">50%</div>
                                <div className="w-6/12">
                                    <div className="rounded-xl shadow-sm overflow-hidden p-1 bg-gray-100 mr-2">
                                        <div className="relative h-1 flex items-center justify-center">
                                            <div
                                                className="absolute top-0 bottom-0 left-0 rounded-lg w-[50%] bg-[#36b9cc]"></div>
                                            <div className="relative text-blue-900 font-medium text-sm"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className={"flex w-2/12 text-gray-600 text-4xl justify-center items-center opacity-50"}>
                            <FaClipboardList/>
                        </div>
                    </div>
    
                   <div
                        className="flex w-full h-28 p-4 border-l-8 border-[#f6c23e] rounded-lg shadow-2xl bg-white border-e-gray-300">
                        <div className={"flex flex-wrap w-10/12 "}>
                            <p className={"flex-row w-full text-[#f6c23e] text-[14px]  "}>PENDING REQUESTS</p>
                            <p className={"flex-row w-full text-gray-600 font-bold "}>18</p>
                        </div>

                        <div className={"flex w-2/12 text-gray-600 text-4xl justify-center items-center opacity-50"}>
                            <TiMessages/>
                        </div>
                    </div>

            </div>
            {/* <div className='flex mt-[22px] w-full gap-[30px]'>
                <div className='basis-[70%] border bg-white shadow-md cursor-pointer rounded-[4px]'>
                    <div className='bg-[#F8F9FC] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED] mb-[20px]'>
                        <h2 className='text-[#4e73df] text-[16px] leading-[19px] font-bold'>Earnings Overview</h2>
                        <FaEllipsisV color="gray" className='cursor-pointer' />
                    </div>

                    <div className="w-full">
                        <canvas id="myAreaChart"></canvas> 
                         <Line options={options} data={data} /> 
                        <LineChart
                            width={750}
                            height={300}
                            data={datas}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                        </LineChart>
                    </div>

                </div>
                <div className='basis-[30%] border bg-white shadow-md cursor-pointer rounded-[4px]'>
                    <div className='bg-[#F8F9FC] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED]'>
                        <h2 className='text-[#4e73df] text-[16px] leading-[19px] font-bold'>Revenue Resources</h2>
                        <FaEllipsisV color="gray" className='cursor-pointer' />
                    </div>
                    <div className='pl-[35px]'>

                        <PieChart1 />
                       
                    </div>
                </div>
            </div> */}

              {/*    charts*/}

              <div className={"flex flex-row w-full"}>

{/*Inline*/}
<div
    className={"flex flex-col w-7/12 h-auto bg-[#f8f9fc] m-2 shadow-2xl border-e-gray-300 p-2 rounded-lg"}>

    <div className={"flex flex-row w-full"}>
        <h1 className={"text-[#4e73df] w-11/12 font-semibold p-4"}>Earnings Overview</h1>
        <div className={"flex flex-row w-1/12 text-gray-600 justify-end items-center opacity-50"}>
            <button><FaEllipsisV/></button>
        </div>
    </div>
    <hr className={"opacity-70"}/>
    <LineChart
                            width={750}
                            height={300}
                            data={datas}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                        </LineChart>
   
</div>

{/*pie*/}
<div
    className={"flex flex-col w-5/12 h-auto bg-[#f8f9fc] m-2 shadow-2xl border-e-gray-300 p-2 rounded-lg"}>

    <div className={"flex flex-row w-full"}>
        <h1 className={"text-[#4e73df] w-11/12 font-semibold p-4"}>Revenue Sources</h1>
        <div className={"flex flex-row w-1/12 text-gray-600 justify-end items-center opacity-50"}>
            <button><FaEllipsisV/></button>
        </div>
    </div>

    <hr className={"opacity-70"}/>

    <PieComponent/>


</div>

</div>
            <div className='flex mt-[22px] w-full gap-[30px]'>
                <div className='basis-[55%] border bg-white shadow-md cursor-pointer rounded-[4px]'>
                    <div className='bg-[#F8F9FC] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED]'>
                        <h2 className='text-[#4e73df] text-[16px] leading-[19px] font-bold'>Projects Overview</h2>
                        <FaEllipsisV color="gray" className='cursor-pointer' />
                    </div>
                    <div className='px-[25px] space-y-[15px] py-[15px]'>
                        <div>
                            <h2>Server Migration</h2>
                            <Progress percent={20} strokeColor="#E74A3B" />
                        </div>
                        <div>
                            <h2>Sales Tracking</h2>
                            <Progress percent={40} status="active" strokeColor="#F6C23E" />
                        </div>
                        <div>
                            <h2>Customer Database</h2>
                            <Progress percent={60} status="active" strokeColor="#4E73DF" />
                        </div>
                        <div>
                            <h2>Payout Details</h2>
                            <Progress percent={80} strokeColor="#36B9CC" />
                        </div>
                        <div>
                            <h2>Account Setup</h2>
                            <Progress percent={100} status="success" strokeColor="#1CC88A" />
                        </div>
                    </div>





                </div>
                <div className='basis-[45%] border bg-white shadow-md cursor-pointer rounded-[4px]'>
                    <div className='bg-[#F8F9FC] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED]'>
                        <h2 className='text-[#4e73df] text-[16px] leading-[19px] font-bold'> Illustrations</h2>
                        <FaEllipsisV color="gray" className='cursor-pointer' />
                    </div>
                    <div className='pl-[35px] flex flex-col items-center justify-center h-[100%]'>
                     <Image
                            src="/undraw_posting_photo.svg"
                            width={300}
                            height={230}
                            alt="Picture of the author"
                        />
                        <div>
                            <p className='mt-[25px] text-semibold text-gray-500 mb-1 pr-4' >Add some quality, svg illustrations to your 
                            project courtesy of unDraw, a constantly updated collection of beautiful svg images that you can use
                             completely free and without attribution!</p>
                             <a className='text-blue-600 mb-1' href="https://undraw.co/">Browse Illustrations on unDraw →</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex mt-[22px] h-[40vh] w-full gap-[30px]'>
                <div className=' basis-[55%]  cursor-pointer rounded-[4px]  flex-row'>
                                    <div className="bg-[#4e73df] h-20 w-5/12 rounded-[4px] shadow-md">
                                        <div className="text-white pl-6 pt-5">
                                            Primary
                                            <p className=' pl-0 pt-0'>#4e73df</p>
                              </div>
                      </div>
                                    <div className="bg-[#1cc88a] h-20 w-5/12 rounded-[4px] shadow-md">
                                        <div className="text-white pl-6 pt-5">
                                        Success
                                          <p className=' pl-0 pt-0'>#1cc88a</p>
                              </div>
                          </div>
                                    <div className="bg-[#36b9cc] h-20 w-5/12 rounded-[4px] shadow-md">
                                        <div className="text-white pl-6 pt-5">
                                            Info
                                            <p className=' pl-0 pt-0'>#36b9cc</p>
                              </div>
                          </div>
                                    <div className="bg-[#f6c23e] h-20 w-5/12 rounded-[4px] shadow-md">
                                        <div className="text-white pl-6 pt-5">
                                            Warning
                                            <p className=' pl-0 pt-0'>#f6c23e</p>
                              </div>
                          </div>
                                    <div className="bg-[#e74a3b] h-20 w-5/12 rounded-[4px] shadow-md">
                                        <div className="text-white pl-6 pt-5">
                                            Danger
                                            <p className=' pl-0 pt-0'>#e74a3b</p>
                              </div>
                          </div>
                                    <div className="bg-[#858796] h-20 w-5/12 rounded-[4px] shadow-md">
                                        <div className="text-white pl-6 pt-5">
                                        Secondary
                                            <p className=' pl-0 pt-0'>#858796</p>
                              </div>
                          </div>
                                    <div className="bg-[#f8f9fc] h-20 w-5/12 rounded-[4px] shadow-md">
                                        <div className="text-gray-500 pl-6 pt-5">
                                            Light
                                            <p className=' pl-0 pt-0'>#f8f9fc</p>
                              </div>
                          </div>
                                    <div className="bg-[#5a5c69] h-20 w-5/12 rounded-[4px] shadow-md">
                                        <div className="text-white pl-6 pt-5">
                                            Dark
                                            <p className=' pl-0 pt-0'>#5a5c69
                                                        </p>
                              </div>
                          </div>
                </div>
                <div className='basis-[45%] border bg-white shadow-md cursor-pointer rounded-[4px]'>
                    <div className='bg-[#F8F9FC] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED]'>
                        <h2 className='text-[#4e73df] text-[16px] leading-[19px] font-bold'> Development Approach</h2>
                        <FaEllipsisV color="gray" className='cursor-pointer' />
                    </div>
                    <div className='pl-[25px] flex items-center justify-center h-[100%]'>
                        <div className='p-0'>
                            <p className='text-semibold mt-0 text-gray-500 mb-5 pr-5' >SB Admin 2 makes extensive use of Bootstrap 4 utility
                             classes in order to reduce CSS bloat and poor page performance. Custom CSS classes are used to create custom 
                             components and custom utility classes.</p>
                             <p className='mt-[10px] text-semibold text-gray-500 mb-5' >Before working with this theme, you should become
                              familiar with the Bootstrap framework, especially the utility classes.</p>
                        </div>
                    </div>
                </div>
            </div>


        </div >
    )
}

export default Main   