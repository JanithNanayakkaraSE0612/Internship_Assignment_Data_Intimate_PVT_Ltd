'use client'
import { Doughnut} from "react-chartjs-2";
import Chart from "chart.js/auto";

const PieComponent = () => {
    return (
        <div>
            <Doughnut
                data={{

                    datasets: [
                        {
                            label: "# of vulnerabilities",
                            data: [55,30,15],
                            backgroundColor: ["#4e73df", "#1cc88a", "#36b9cc"],
                            borderColor: "white",
                            borderWidth: 2
                        },
                    ],
                    labels: [
                        "Direct",
                        "Social",
                        "Referral",
                    ]
                }}
                height={350}
                width={600}
                options={{
                    maintainAspectRatio: false
                }}
            />
        </div>
    );
};

export default PieComponent;