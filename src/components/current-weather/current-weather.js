import "./current-weather.css";

const CurrentWeather = ({ data }) => {
    return (
        <div className="weather">
            <div className="top">
                <img
                    src={`icons/${data.weather[0].icon}.png`}
                    alt="weather"
                    className="weather-icon"
                />
                <div>
                    <p className="city">{ data.city }</p>
                    <p className="weather-desc">{ data.weather[0].description }</p>
                </div>
            </div>
            <div className="bottom">
                <p className="temperature">
                    <span className="temp-value">{ Math.round(data.main.temp) }</span>&#176;C
                </p>
                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-label">Details</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Feels like</span>
                        <span className="parameter-value">{ Math.round(data.main.feels_like) }&#176;C</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Wind</span>
                        <span className="parameter-value">{ Math.round(data.wind.speed) } m/s</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Humidity</span>
                        <span className="parameter-value">{ data.main.humidity }%</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Pressure</span>
                        <span className="parameter-value">{ data.main.pressure } hPa</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CurrentWeather;
