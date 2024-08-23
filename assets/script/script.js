const url = "https://api.hgbrasil.com/weather?format=json-cors&key=bb63f0ff";
const cidade = "&city_name=Espírito Santo Do Pinhal, SP";

async function Weather(){
    const weather = await fetch(url+cidade);
    const data = await weather.json();

    let { condition_slug, city, temp, date, time, humidity, wind_speedy, description } = data['results'];

    cities.innerText = city;

    image.src = "assets/media/" + condition_slug + ".svg";
    descript.innerText = description
    temperature.innerText = temp + "°C";

    timeDate.innerText = date + " - " + time;
    humidade.innerText = "Humidade " + humidity + "%";
    velocidade.innerText = "Vento " + wind_speedy;

    // *** //

    var a = 0;

    for(a = 0; a <= 5; a++){
        let { condition, date, humidity, wind_speedy, description } = data['results']['forecast'][a]; 

        switch (a){
            case 1:
                constDate1.innerHTML = `
                    <div class="content ${a}">
                        <div class="timeDate">
                            <h6 id="timeDate">${date}</h6>
                            <h6 id="humidade">Humidade ${humidity}%</h6>
                            <h6 id="velocidade">Velocidade ${wind_speedy}</h6>
                        </div>

                        <div class="temp">
                            <img src="assets/media/${condition}.svg" alt="Weather" id="image" />
                            <h6 id="descript">${description}</h6>
                        </div>
                    </div>`;
            break;

            case 2:
                constDate2.innerHTML = `
                    <div class="content ${a}">
                        <div class="timeDate">
                            <h6 id="timeDate">${date}</h6>
                            <h6 id="humidade">Humidade ${humidity}%</h6>
                            <h6 id="velocidade">Velocidade ${wind_speedy}</h6>
                        </div>

                        <div class="temp">
                            <img src="assets/media/${condition}.svg" alt="Weather" id="image" />
                            <h6 id="descript">${description}</h6>
                        </div>
                    </div>`;
            break;

            case 3:
                constDate3.innerHTML = `
                    <div class="content ${a}">
                        <div class="timeDate">
                            <h6 id="timeDate">${date}</h6>
                            <h6 id="humidade">Humidade ${humidity}%</h6>
                            <h6 id="velocidade">Velocidade ${wind_speedy}</h6>
                        </div>

                        <div class="temp">
                            <img src="assets/media/${condition}.svg" alt="Weather" id="image" />
                            <h6 id="descript">${description}</h6>
                        </div>
                    </div>`;
            break;

            case 4:
                constDate4.innerHTML = `
                    <div class="content ${a}">
                        <div class="timeDate">
                            <h6 id="timeDate">${date}</h6>
                            <h6 id="humidade">Humidade ${humidity}%</h6>
                            <h6 id="velocidade">Velocidade ${wind_speedy}</h6>
                        </div>

                        <div class="temp">
                            <img src="assets/media/${condition}.svg" alt="Weather" id="image" />
                            <h6 id="descript">${description}</h6>
                        </div>
                    </div>`;
            break;

            case 5:
                constDate5.innerHTML = `
                    <div class="content ${a}">
                        <div class="timeDate">
                            <h6 id="timeDate">${date}</h6>
                            <h6 id="humidade">Humidade ${humidity}%</h6>
                            <h6 id="velocidade">Velocidade ${wind_speedy}</h6>
                        </div>

                        <div class="temp">
                            <img src="assets/media/${condition}.svg" alt="Weather" id="image" />
                            <h6 id="descript">${description}</h6>
                        </div>
                    </div>`;
            break;
        }
    }
}

Weather();