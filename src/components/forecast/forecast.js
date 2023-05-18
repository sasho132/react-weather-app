import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from "react-accessible-accordion";
import './forecast.css'

const WEEK_DAYS = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
];

const Forecast = ({ data }) => {
    const currentDayInWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(currentDayInWeek, WEEK_DAYS.length).concat(
        WEEK_DAYS.slice(0, currentDayInWeek)
    );

    return (
        <div>
            <label className="title">Daily</label>
            <Accordion allowZeroExpanded>
                {data.list.slice(0, 7).map((item, idx) => (
                    <AccordionItem key={idx}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="daily-item">
                                    <img
                                        src={`icons/${item.weather[0].icon}.png`}
                                        alt="weather"
                                        className="icon-small"
                                    />
                                    <label className="day">{ forecastDays[idx] }</label>
                                    <label className="desc">
                                        { item.weather[0].description }
                                    </label>
                                    <label className="min-max">
                                        min: { Math.round(item.main.temp_min) }&#176;C /  
                                        max: { Math.round(item.main.temp_max) }&#176;C
                                    </label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="daily-details">
                                <div className="daily-details-item">
                                    <label>Pressure</label>
                                    <label>{ item.main.pressure } hPa</label>
                                </div>
                                <div className="daily-details-item">
                                    <label>Humidity</label>
                                    <label>{ item.main.humidity }%</label>
                                </div>
                                <div className="daily-details-item">
                                    <label>Wind</label>
                                    <label>{ Math.round(item.wind.speed) } m/s</label>
                                </div>
                                <div className="daily-details-item">
                                    <label>Clouds</label>
                                    <label>{ item.clouds.all }%</label>
                                </div>
                                <div className="daily-details-item">
                                    <label>Feels like</label>
                                    <label>{ Math.round(item.main.feels_like) }&#176;C</label>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
};

export default Forecast;
