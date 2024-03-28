import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Challenges = () => {
    const [dailyTarget, setDailyTarget] = useState('');
    const [dailyCompleted, setDailyCompleted] = useState('');
    const [data, setData] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        localStorage.setItem('dailyTarget', dailyTarget);
        localStorage.setItem('dailyCompleted', dailyCompleted);

        setData(prevData => [...prevData, { date: new Date().toLocaleDateString(), dailyCompleted, dailyTarget }]);

        setDailyCompleted('');
        setDailyTarget('');
    };

    return (
        <div className='mt-6 md:mt-12'>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col md:flex-row gap-3 md:justify-center md:items-center ml-5'>
                    <label className='text-xl font-semibold mr-6'>
                        Daily Target Hours:
                        <input
                            type="number"
                            className='border rounded-xl md:ml-2 px-3 py-1'
                            value={dailyTarget}
                            onChange={(e) => setDailyTarget(e.target.value)}
                        />
                    </label>
                    <label className='text-xl font-semibold'>
                        Daily Completed Hours:
                        <input
                            type="number"
                            className='border rounded-xl md:ml-2 px-3 py-1'
                            value={dailyCompleted}
                            onChange={(e) => setDailyCompleted(e.target.value)}
                        />
                    </label>
                    <button type="submit" className='btn btn-primary bg-[#224a4e] rounded-xl border-0 text-white md:ml-5 px-5 w-24'>Save</button>
                </div>
            </form>

            <div className='flex justify-center items-center max-w-full mx-auto mt-8'>
                <LineChart
                    width={window.innerWidth < 768 ? window.innerWidth : 1000}
                    height={300}
                    data={data}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="dailyCompleted" stroke="#8884d8" name="Daily Completed" strokeWidth={window.innerWidth < 768 ? 1 : 2} />
                    <Line type="monotone" dataKey="dailyTarget" stroke="#82ca9d" name="Daily Target" strokeWidth={window.innerWidth < 768 ? 1 : 2} />
                </LineChart>

            </div>

        </div>
    );
};

export default Challenges;
