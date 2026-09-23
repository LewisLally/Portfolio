import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './WeatherDetail.css';

export const WeatherDetail = () => {
  const { date } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hourlyForecasts, setHourlyForecasts] = useState([]);

  const latitude = 51.5074; // your location
  const longitude = -0.1278;
  const timezone = 'Europe/London';

  useEffect(() => {
    const fetchHourlyData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,weather_code,precipitation,rain,snowfall,windspeed_10m,winddirection_10m&timezone=${timezone}`
        );
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();

        // Filter hourly data for the specific date
        const hourlyTimes = data.hourly.time; // ISO strings
        const indicesForDate = hourlyTimes
          .map((t, i) => ({ t, i }))
          .filter(({ t }) => t.slice(0, 10) === date)
          .map(({ i }) => i);

        const forecasts = [];
        for (let hour = 0; hour < 24; hour++) {
          // find index for this hour
          const index = indicesForDate.find(i => {
            const hourInData = new Date(data.hourly.time[i]).getHours();
            return hourInData === hour;
          });
          if (index !== undefined) {
            forecasts.push({
              hour,
              temperature: data.hourly.temperature_2m[index],
              weather_code: data.hourly.weather_code[index],
              precipitation: data.hourly.precipitation[index],
              rain: data.hourly.rain[index],
              snowfall: data.hourly.snowfall[index],
              windspeed: data.hourly.windspeed_10m[index],
              winddirection: data.hourly.winddirection_10m[index],
            });
          } else {
            // fallback if no data
            forecasts.push({
              hour,
              temperature: 'N/A',
              weather_code: 'N/A',
              precipitation: 'N/A',
              rain: 'N/A',
              snowfall: 'N/A',
              windspeed: 'N/A',
              winddirection: 'N/A',
            });
          }
        }
        setHourlyForecasts(forecasts);
      } catch (err) {
        console.error('Error fetching hourly data:', err);
        setError('Failed to load hourly weather data.');
      }
      setIsLoading(false);
    };

    fetchHourlyData();
  }, [date]);

  if (isLoading) return <p>Loading hourly forecast...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Hourly Forecast for {date}</h2>
      <table className="table">
        <thead>
          <tr>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Hour</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Temp (°C)</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Weather Code</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Precipitation (mm)</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Rain (mm)</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Snowfall (mm)</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Wind Speed (km/h)</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Wind Dir (°)</th>
          </tr>
        </thead>
        <tbody>
          {hourlyForecasts.map(({ hour, temperature, weather_code, precipitation, rain, snowfall, windspeed, winddirection }) => (
            <tr key={hour}>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>{`${hour.toString().padStart(2, '0')}:00 - ${(hour + 0).toString().padStart(2, '0')}:59`}</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>{temperature}</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>{weather_code}</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>{precipitation}</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>{rain}</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>{snowfall}</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>{windspeed}</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>{winddirection}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};