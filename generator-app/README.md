# Character Generator Warhammer: 4th Edition

Krótki opis do czego służy projekt.
Przygotowanie generatora postaci na podstawie Gry fabularnej RPG Warhammer: 4th Edition.


# Technologie: 

- React
- ES6
- [create-react-app] (https://github.com/facebook/create-react-app)
- [Biblioteka MATERIAL-UI]: (https://material-ui.com)
- styled-components
- JSON data

# Podstawowe funkcjonalności:

1 . Pobranie klasy, profesji oraz poziom profesji z pliku JSON (./data/careers.json) 
     Renderowanie danych za pomocą komponentów typu Checkbox / MultiSelect 
2. Przygotowanie 'steppera' do wypisywanie podstawowych danych postaci korzystając z inputów (resetowanie danych)
3. Losowanie cech w zależności od wybranej rasy postaci.
4. Inkrementacja cech postaci oraz doświadczenia (im więcej wydanych punktów na cechę 
    tym bardziej rośnie koszt wydanego doświadczenia)
5. Tooltip

# To do:

- Globalne podsumowanie doświadczenia,
- Sparowanie wartości boolowskie poziomu postaci  z inkrementacją cech

#Instalacja i uruchomienie:

1. - git clone (https://github.com/von-griffe/WH-Character-Generator)
2. - cd 'WH-Character-Generator/generator-app' 
3. - npm install   (instalacja dependencies)
4. - npm start (uruchomić aplikację komendą)
5. - http://localhost:3000/ (Upewnij się czy aplikacja uruchomiła się na porcie '3000')







