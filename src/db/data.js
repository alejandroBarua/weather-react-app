const bogota = JSON.parse(`{
    "id": 3688689,
    "timezone": -25200,
    "name": "Bogota",
    "main": {
        "temp": 7.73,
        "feels_like": 7.73,
        "temp_min": 7.73,
        "temp_max": 7.73,
        "pressure": 1026,
        "humidity": 100
    },
    "wind": {
        "speed": 1.5,
        "deg": 350
    },
    "sys": {
        "country": "CO",
        "sunrise": 1638089914,
        "sunset": 1638140996
        },
    "weather": [
        {
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "01d"
        }
    ]
}`);

const buenosAires = JSON.parse(`{
    "id": 3435910,
    "timezone": -25200,
    "name": "Buenos Aires",
    "main": {
        "temp": 19.76,
        "feels_like": 19.96,
        "temp_min": 18.82,
        "temp_max": 20.85,
        "pressure": 1009,
        "humidity": 83
    },
    "wind": {
        "speed": 1.5,
        "deg": 350
    },
    "sys": {
        "country": "AR",
        "sunrise": 1638089914,
        "sunset": 1638140996
        },
    "weather": [
        {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "09n"
        }
    ]
}`);

const monterrey = JSON.parse(`{
    "id": 3995465,
    "timezone": -25200,
    "name": "Monterrey",
    "main": {
        "temp": 16.23,
        "feels_like": 15.61,
        "temp_min": 16.23,
        "temp_max": 16.23,
        "pressure": 1021,
        "humidity": 65,
        "sea_level": 1021,
        "grnd_level": 957
    },
    "wind": {
        "speed": 1.5,
        "deg": 350
    },
    "sys": {
        "country": "MX",
        "sunrise": 1638089914,
        "sunset": 1638140996
        },
    "weather": [
        {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "13d"
        }
    ]
}`);

var cities = [buenosAires, bogota, monterrey];

export default cities;

