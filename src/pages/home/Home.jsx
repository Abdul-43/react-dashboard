import ChartBox from "../../components/chartBox/ChartBox";
import TopBox from "../../components/topBox/TopBox";
import "./home.scss";
import {
  chartBoxProduct,
  chartBoxConversion,
  chartBoxRevenue,
  chartBoxUser,
  barChartBoxRevenue,
  barChartBoxVisit,
} from "../../data";
import BarCharts from "../../components/barChart/BarChart";
import PieChart from "../../components/pieChart/PieChartBox";
import PieChartBox from "../../components/pieChart/PieChartBox";
import BigCharts from "../../components/bigCharts/BigCharts";
function Home() {
  return (
    <div className="home">
      <div className="box box1">
        <TopBox />
      </div>
      <div className="box box2">
        <ChartBox {...chartBoxUser} />
      </div>
      <div className="box box3">
        <ChartBox {...chartBoxProduct} />
      </div>
      <div className="box box4">
        <PieChartBox />
      </div>
      <div className="box box5">
        <ChartBox {...chartBoxRevenue} />
      </div>
      <div className="box box6">
        <ChartBox {...chartBoxConversion} />
      </div>
      <div className="box box7">
        <BigCharts />
      </div>
      <div className="box box8">
        <BarCharts {...barChartBoxRevenue} />
      </div>
      <div className="box box9">
        <BarCharts {...barChartBoxVisit} />
      </div>
    </div>
  );
}

export default Home;
