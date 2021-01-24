export default [
  {
    "questionText": "Co to jest framework?",
    "answer": "Framework to narzędzie które definiuje metodę budowy aplikacji oraz mechanizm jej działania",
    "tag": ["ogólne", "framework"]
  },
  {
    "questionText": "Co to jest angular?",
    "answer": "Angular to Framework oparty na języku JavaScript, wspomagający tworzenie i rozwój aplikacji internetowych na SPA. Opiera się na wzorcu MVC aby ułatwić ich rozwój i testowanie",
    "tag": ["ogólne", "angular"]
  },
  {
    "questionText": "Co to są wzroce projektowe?",
    "answer": "Wzorce projektowe to sposoby na rozwiązanie powszechnego problemu, sytuacji, z którą możemy się spotkać w czasie projektowania aplikacji. Wzorzec określa dany problem, prezentując jedno, lub więcej jego rozwiązanie.",
    "tag": ["ogólne", "wzorce-programowania", "mvc", "singleton"]
  },
  {
    "questionText": "Jakie znasz wzorce projektowe? Scharakteryzuj poszczególne",
    "answer": "MVC - Model, View, Controler. Pozwala na oddzielenie od siebie warstwy modelu (baza danych, pliki), warstwy widoku (html,  rss) i warstwy kontrolującej całą aplikacjeSingleton - ",
    "tag": ["ogólne", "wzorce-programowania", "mvc", "singleton"]
  },
  {
    "questionText": "Język silnie/ściśle typowany vs słabo/luźno typowany; Język statycznie typowany vs dynamicznie typowany?",
    "answer": "",
    "tag": ["ogólne", "javascript"]
  },
  {
    "questionText": "Co to jest Programowanie deklaratywne?",
    "answer": "",
    "tag": ["ogólne", "paradygmaty programowania"]
  },
  {
    "questionText": "Co to jest Programowanie imperatywne?",
    "answer": "",
    "tag": ["ogólne", "paradygmaty programowania"]
  },
  {
    "questionText": "Co to jest CLI?",
    "answer": "CLI czyli Comand Line Interface. Dla angulara można zainstalować dedykowane CLI które służy do inicjalizowania, wspierania, budowania i utrzymywania aplikacji angularowych.",
    "tag": ["ogólne", "angular", "CLI"]
  },
  {
    "questionText": "Jakie znacz komendy w angularowym CLI?",
    "answer": "ng generate component *nazwa* / ng g c *nazwa* / ng g c *nazwa* --spec falseng generate directive *nazwa* / ng g d *nazwa* / ng g d *nazwa* --spec falseng serveng new *nazwa*",
    "tag": ["CLI", "angular", "ogólne"]
  },
  {
    "questionText": "Co to jest TypeScript?",
    "answer": "TypeScript to język programowania stworzonym przez Microsoft. Wykorzystywany w Angularze. Jest rozszerzeniem Javascriptu gdyż umożliwia na tworzenie Interfaceów, Enumów, zmiennych o określonych typach. Wynikiem kompilacji kodu TypeScriptowego jest JavaScript",
    "tag": ["TypeScript", "ogólne", "angular"]
  },
  {
    "questionText": "Jak dodać np. bootstrap'a do projektu w Anagular",
    "answer": "W pliku .angular-cli.json który znajduje się w foldere src możemy dodać rozszerzenia. Aby ustawienia zostały zapisane musimy zrestartować serwer",
    "tag": ["angular"]
  },
  {
    "questionText": "Z czego składa się projekt w Angular?",
    "answer": "folder e2e służy to testowania aplikacji, folder node_modules to biblioteki z których korzystamy w aplikacji, src to nasza aplikacja, wraz z ustawieniami - co kiedy się wczytuje co zawiera itd.",
    "tag": ["angular"]
  },
  {
    "questionText": "Jaka jest kolejność ładowania plików aplikacji?",
    "answer": "Najważniejszym plikiem w projekcie angularowym jest main.ts który ładuje nam AppModule. W AppModule w dekoratorze @NgModule mamy własność bootstrap która pozwala nam określić komponent główny - pierwszy ładowany komponent, komponent który inicjujemy w pliku index.html będący jedynym plikiem pobieranym przez uzytkownika - nasze SPA.",
    "tag": ["angular"]
  },
  {
    "questionText": "Co to są komponenty?",
    "answer": "Komponenety to części składowe interfejsu użytkownika naszej aplikacji. Na komponent składają się pliki html - szablon, css - style, ts - mechanika, spec - testy.Dekorator @Component definiuje komponenet. Wymagane jest żeby w dekoratorze @Component uwzględnić template. Każdy komponent musi być wykorzystywany przez inny komponent lub przez aplikację i musi należeć do NgModule.Aby korzystać z komponentu należy dodać go do declarations w NgModule.",
    "tag": ["angular", "component"]
  },
  {
    "questionText": "Z czego się składa komponent?",
    "answer": "plik html - widok komponentu w którym okreslamy położenie elementów oraz wyświetlamy / pobieramy dane, definiowany jest w pliku plik css - style komponentu, które dzięki własności encapsulation mogą być stylami globalnymi dla całej aplikacji,plik klasy komponentu (.ts) - jest główną klasą komponentu (sercem komponentu), zawiera metadane na temat komponentu.plik spec - służy do przeprowadzania testów",
    "tag": ["angular", "component"]
  },
  {
    "questionText": "Do czego służy komponent?",
    "answer": "Komponent wykorzystujemy do budowy składowych elementów aplikacji.",
    "tag": ["angular", "component"]
  },
  {
    "questionText": "Jak tworzy się komponent?",
    "answer": "Komponent tworzymy w elemencie(komponencie) w którym ma się znajdować. Do stworzenia komponentu korzystamy z CLI albo tworzymy nowy folder w którym będziemy przechowywać nasze pliki komponentu.Za pomocą CLI wygląda to następująco: >ng generate component *nazwa_komponentu*  .Inną opcją jest skrócona wersja: >ng g c *nazwa_komponentu*.Aby pominąć plik konfiguracyjny spec należy wykonać: >ng g c *nazwa_komponentu* --spec false.Ręcznie komponent tworzymy następująco: Najpierw tworzymy klasę: export class NazwaKomponentuComponent{}, nad klasą umieszczamy dekorator @Component({}), importujemy Component: import { Component } from '@angular/core'w Dekoratorze umieszczamy własności takie jak selector: [selectorName], templateUrl: [templatePath], styleUrls: [CSSPath] - to są podstawowe. Dodatkowe takie jak encapsulation albo providers w zależności od zapotrzebowania.Komponent koniecznie musi zawierać własność template.",
    "tag": ["angular", "component"]
  },
  {
    "questionText": "Jak zagnieżdżać komponenty?",
    "answer": "Zagnieżdżanie komponentów czyli Nested components. Zagnieżdżanie polega tym że w jednym komponencie możemy zawierać inne dzięki czemu opracowujemy detale i mamy do nich dostęp w prosty sposób.Zagnieżdżanie odbywa się w template gdzie poprzez przypisany komponentowi selektor zakotwiczam w wybranym przez nas miejscu: <sekeltorKomponentu></sekeltorKomponentu>możliwe jest wrzucenie kodu do zagnieżdżonego komponentu kodu z pozycji template. dzieje sie to w ten sposób że pomiędzy znaczniki selektorKomponentu wrzucamy kod który chcemy 'przesłać' do zagnieżdżonego komponentu.Wówczas w zagnieżdżonym komponencie w miejscu gdzie ma się wyświetlić owe wrzucenie kodu określamy znacznikami <ng-content></ng-content>",
    "tag": ["angular", "component", "ng-content"]
  },
  {
    "questionText": "Jak można wyróżnić właściwości dekoratora @Component() w komponencie?",
    "answer": "templateUrl - główna właściwość, odpowiedzialna za szablon, podajemy ścieżkę templatki.template - alternatywa dla templateUrls. Uzupełniamy HTMLem.styleUrls - ścieżka do styli.styles - kod styli wykorzystanych w komponencieselector - nazwa i sposob implementacji komponentuencapsulation - ustawienia styli: globalne/lokalneproviders - instancja klasy serwisu dostępna dla komponentu i wszystkich dzieci komponentu",
    "tag": ["angular", "component"]
  },
  {
    "questionText": "Co to Data Binding?",
    "answer": "Data Binding to inaczej sposób wiązania danych. Wyróżniamy takie wiązania jak Interpolacyjne {{}} w którym zawieramy zmienną tekstową lub prostą liczbową,za pomocą string interpolation możemy jedynie wyświetlać dane.Property Binding inaczej też One-way binding ponieważ taki typ wiązania pozwala reagować jedynie na zmiany zachodzące w komponencie(w pliku .ts).Property binding pozwala na przesyładnie danychy w jednym kierunku, z danych komponenta do własności danego elementu. Property binding ustawia property elementu ale nie odczytuje jej własności[property]=\"wiązanie\"Event Binding w przeciwieństwie to Interpolacji i Wiązań Własności nie polega na przesyłaniu danych z komponentu do szablonu ale na odwrót. Event Biding reaguje na zdarzenia użytkownika z poziomu widoku i przekazuje je do komponentu. Możliwe jest także skorzystanie z obiektu $event który przechowuje wszystkie dane o elemencie.Za jego pomocą można przekazać dane do komponentu. Przy wykorzystaniu wbudowanej klasy EventEmitter możliwe jest stworzenie kustomowych eventów. wywołując metodę emit() aktywujemy event , a przekazując jej dane możemy wysłać je dalej.(zmiennaEventEmitter)=\"funkcja($event)\" albo (input)=\"currentInput.value = $event.target.value\"Two-way Binding umożliwia nam wyświetlenie informacji reagujących na zdarzenia oraz reagujących na zmiany zachodzące w komponencie. Jest połączeniem Property Binding i Event Binding.Przypomina pudełko bananów ;)) [()] tak więc: [(value)]=\"zmienna\"",
    "tag": ["angular", "data-binding", "component", "service"]
  },
  {
    "questionText": "Jakie znasz rodzaje Data Binding?",
    "answer": "String Interpolation, Property Binding, Two-way Binding, event Binding",
    "tag": [
      "angular",
      "data-binding",
      "component",
      "service",
      "string-interpolation",
      "property-binding",
      "two-way-binding",
      "event-binding"
    ]
  },
  {
    "questionText": "Co to jest String Interpolation",
    "answer": "Wiązanie Interpolacyjne oznacza się dwoma klamrami otwartymi i zamkniętymi - {{}}. String Interpolation pozwala nam na wyświetlanie zmiennych tekstowych lub prostych liczbowych. Pozwala nam także obsłużyć proste działania matematyczne a takżezawrzeć funkcję komponentu które zwracają proste dane konwertowalne na stringa. Poza tym możemy skorzystać z operatorów: | , ?. , !. oraz funkcji Pipe (uppercase, lowercase, json ...",
    "tag": ["angular", "string-interpolation", "component"]
  },
  {
    "questionText": "Co to jest Property Binding?",
    "answer": "Property Binding inaczej One-way Binding pozwala nam przesyłać dane z komponentu do widoku - template. Służy do wiązania parametrów elementu z danymi komponentu. za pomocą Property Binding wiąże się elementy takie jak np. ngClass, ngStyle.[nazwaWłasności]=\"wartość\"",
    "tag": ["angular", "property-binding", "component", "service"]
  },
  {
    "questionText": "Co to jest Two-way Binding",
    "answer": "Two-way Binding pozwala przesyłac wartości do własności elementu ale także w przypadku zmiany wartości własności elementu przez użytkownika aplikacji pozwala odczytać tą wartość i przesłać ją do komponentu[(nazwaWłasności)]=\"wartość\".",
    "tag": ["angular", "two-way-binding", "component"]
  },
  {
    "questionText": "Co to jest Event Binding",
    "answer": "Event Binding reaguje na zdarzenia. W przypadku gdy użytkownik wykonuje akcję na określonym elemencie możemy pobrać informacje o \"zmienionym\" elemencie i zareagować na nie. Event Binding pozwala pobrać wszystkie informacje o danym elemencie dzięki obiektowi $event. Pozwala także skorzystać z klasy EventEmitter za pomocą której możemy aktywować kustomowy event i przesłać go do np. komponentu nadrzędnego.(zmiennaEventEmitter)=\"funkcja($event)\" albo (input)=\"currentInput.value = $event.target.value\"",
    "tag": ["angular", "event-binding", "component", "service"]
  },
  {
    "questionText": "Co to jest Dyrektywa",
    "answer": "Dyrektywy służą nam do zmiany struktury widoku oraz do zmiany własności elementów widoku. ",
    "tag": ["angular", "directive"]
  },
  {
    "questionText": "Jak dzielimy Dyrektywy?",
    "answer": "Na komponenty, dyrektywy strukturalne i dyrektywy atrybutów. Komponenty to dyrektywy z widokiem. Dyrektywy strukturalne to takie które wpływają na DOM tworząc lub usuwając elementy. Dyrektywy atrybutów wpływają na wygląd lub zachowanie elementów DOM nie zmieniając jego struktury. Dyrektywy strukturalne poprzedzone są gwiazdką (np *ngFor), a dyrektywyatrybutów (wbudowane) najczęściej przypominają property binding ( np. [ngClass], [ngStyle] ) gdyż paramentrem najczęściej nie jest sam string. Mozna także stworzyćwłasne dyrektywy (custom directives) które także należy poprzedzić gwiazdką jeżeli chcemy manipulować w DOM",
    "tag": ["angular", "directive"]
  },
  {
    "questionText": "Jak tworzymy własne dyrektywy",
    "answer": "Najlepiej dyrektywy umieszczać w jednym folderze. Np directives.ng g d *nazwa_dyrektywy*. Ręcznie: tworzymy plik o rozszerzeniu .directive.ts, następnie tworzymy w nim klasę. W niej w konstruktorze tworzymy instancje klasy Renderer2 oraz ElementRef. Rendererem tworzymy nowe elementy, zmieniamy własności elementów, ElementRef pobieramy elementy.",
    "tag": ["angular", "directive"]
  },
  {
    "questionText": "Wymień wbudowane dyrektywy i je podziel",
    "answer": "dyrektywy strukturalne: *ngFor, *ngIf, *ngSwitch. dyrektywy atrybutów: [ngStyle], [ngClass]",
    "tag": ["angular", "directive"]
  },
  {
    "questionText": "Jak planować aplikacje w angularze i co w niej uwzględnić?",
    "answer": "Zaczynamy od ficzerów aplikacji - co ma robić aplikacja. Następnie ustalamy jakie komponenty będą nad ficzerami tak żeby dobrze je skomunikować.Później przechodzimy do poszczególnych ficzerów, co w nich uwzględnimy - ustalamy jakie komponenty będą zawarte w pojedyńczym ficzerze. Te komponenty powinny być znaczące dla naszych ficzerów.Następnie ustalamy jakie dane będą przechowywane w naszych ficzerach i ustalamy model naszych danych. ",
    "tag": ["angular", "ogólne"]
  },
  {
    "questionText": "Co to debugowanie?",
    "answer": "Debugowanie pozwala na detekcję i eliminowanie błędów w aplikacji.",
    "tag": ["ogólne", "debugging"]
  },
  {
    "questionText": "Jak debugować w angularze?",
    "answer": "Za pomocą Inspektora w przeglądarce lub za pomocą wtyczek np. Augury",
    "tag": ["angular", "debugging"]
  },
  {
    "questionText": "Jak przesyłać dane między komponentami?",
    "answer": "Za pomocą Proprety property albo Event Binding. Aby wysłać dane z komponentu rodzic do komponentu dziecko należy w miejscu zakotwiczenia komponentu dziecko poprzez property binding przesłać dane ->[zmiennaDostępnaZPoziomuKomponentDziecko] = \"wartośćPobranaDoKomponentuRodzic\". Wówczas aby pobrać własność zmiennaDostępnaZPoziomuKomponentDziecko należy użyć dekoratora Input (wcześniej należy zaimportować jego klasę), tak więc zmienna pobrana będzie wyglądała:@Input() zmiennaDostępnaZPoziomuKomponentDziecko.Aby przesłać dane z komponentu Dziecko do komponentu Rodzic należy wykorzystać Event Binding oraz klasę EventEmitter. wiązanie elementów odbywa się w następujący sposób:w zakotwiczonym komponencie Dziecko umieszczamy event który w nazwie przechowuje zmienną typu EventEmitter. Ta zmienna znajduje się w komponencie dziecko, gdyż detekcję identyfikujemy w komponencie Dziecko.Pobieramy zmienną za pomocą funkcji a dane odbieramy dzięki obiektowi $event. Wygląda to następująco:W zakotwiczonym komponencie Dziecko: (zmiennaTypuEventEmitterDostępnaZPoziomuKomponentDziecko)=\"funkcjaPobierającaDaneDoKomponentuRodzic($event). Tak więc zmiennaTypuEventEmiter znajduje się w Komponencie Dziecko i deklaruje się ją następująco:zmiennaTypuEventEmitter = EventEmitter<typDanychPrzesyłanych>(). Następnie tak ustawioną zmienną za pomocą funkcji emitujemy dalej:jakasFunkcja(){ this.zmiennaTypuEventEmitter.emit( tutaj_dane_przesyłane ); }",
    "tag": ["angular", "data-binding", "Input", "Output"]
  },
  {
    "questionText": "Jak aliasować bindowane właściwości?",
    "answer": "Jak mamy Property Binding na elemencie komponentu Dziecko np: [właściwość]=\"wartość\" to możemy pobrać taką właściwość albo za pomocą @Input() właściwość; albo za pomocą @Input('właściwość') zmienna; Tak samo z event Binding na relacjach Komponentów Rodzic - Dziecko: jak mamy (costamDziecko) = \"pobierzDane($event) to tą daną cośtamDziecko dostępną poza komponentem możemy aliasować: @Output() costamDziecko = EventEmitter<typDanych>() lub @Output('costamDziecko') zmienna = EventEmitter<typDanych>()",
    "tag": [
      "angular",
      "data-binding",
      "property-binding",
      "event-binding",
      "aliasing"
    ]
  },
  {
    "questionText": "Co to jest View Encapsulation i do czego służy oraz jak korzystać?",
    "answer": "Każdy komponent może posiadać własny arkusz styli. Domyślnie style zastosowane w komponencie dotyczą tylko i wyłącznie konkretnego komponentu.View Encapsulation to inaczej własność kapsułkowania widoku - klasa dostępna z wbudowanej biblioteki @angular/core. Służy do zmany ustawienia styli z kapsułkowanych na globlane dla całej aplikacji. w przypadku ustawienia styli na globalne wszystkie inne style komponentówzostają dezaktywowane. Docelowo kapsułkowanie jest ustawione na ViewEncapsulation.Emulated i ustawia style na dostępne tylko dla określonych komponentów. Aby zrezygnować z kapsułkowania styli i ustawić na globalne, przypisujemy Komponentowi własność encapsulation: ViewEncapsulation.None. co ustawia style tego komponentu jako globalne.Możliwe jest także skorzystanie z ViewEncapsulation.Native, wówczas style korzystają z technologi Shadow DOM.",
    "tag": ["angular", "view-encapsulation", "component"]
  },
  {
    "questionText": "Co to jest Local References i do czego służy oraz jak korzystać?",
    "answer": "Lokalne referencje polegają na oznaczeniu elementu który później możemy przesłać do komponentu wraz ze wszystkimi informacjami na temat takiego elementu.Interesujący nas element markujemy lokalną referencją: #NaszCiekawyElement. Następnie w każdym miejscu w naszym szablonie możemy wykorzystać wszystkie własności takiego elementu.Np gdy mamy input oznaczony #NaszCiekawyElement i ktoś wpisze wartość do takiego inputa za pomocą kliknięcia i przekazania lokalnej referencji możemy wysłac informację o elemencie dalej np. do naszego komponentu: <input #localReference> <button (click)=\"funkcja(localReference)/>\" Aby odebrać tak przesłany element funkcja powinna odbierać dane jako element HTML dlatego też: funkcja(dane: HTMLInputElement){ this.jakasZmienna = dane.value }Możemy także wykorzystać #localReference w każdym miejscu naszej template wyświetlając właściwości elementu za pomocą string interpolation: {{localReference.własność}}",
    "tag": ["angular", "local-reference", "template"]
  },
  {
    "questionText": "Co to jest View Child, do czego służy i jak wykorzystywać?",
    "answer": "",
    "tag": ["angular", "view-child", "local-reference", "decorator"]
  },
  {
    "questionText": "Co to jest Content Child, do czego służy i jak wykorzystywać?",
    "answer": "",
    "tag": ["angular", "ng-content", "content-child", "decorator"]
  },
  {
    "questionText": "Co to jest Lifecycle Hooks? Jakie znasz? do czego służą? Jaka kolejność? Które mają dostęp do Template?",
    "answer": "",
    "tag": ["angular", "lifecycle-hook", "ngOnInit", "ngOnDestroy", "template"]
  },
  {
    "questionText": "Co to jest Renderer? Co to ElementRef, a co to Local Reference? Różnice / zalety / wady",
    "answer": "",
    "tag": [
      "angular",
      "view-child",
      "view-children",
      "content-child",
      "content-children",
      "element-ref",
      "renderer",
      "decorator"
    ]
  },
  {
    "questionText": "Co to jest Host Listener?",
    "answer": "",
    "tag": ["angular", "host-listener", "host-binding", "event", "decorator"]
  },
  {
    "questionText": "Co to jest Host Binding?",
    "answer": "",
    "tag": [
      "angular",
      "host-listener",
      "host-binding",
      "event",
      "directive",
      "decorator"
    ]
  },
  {
    "questionText": "Jak wykorzystać Host Listener i Host Binding w dyrektywach?",
    "answer": "",
    "tag": [
      "angular",
      "host-listener",
      "host-binding",
      "event",
      "directive",
      "decorator"
    ]
  },
  {
    "questionText": "Gdzie wykorzystujemy TemplateRef oraz ViewContainerRef",
    "answer": "",
    "tag": [
      "angular",
      "directive",
      "structural-directive",
      "template-ref",
      "view-container-ref",
      "decorator"
    ]
  },
  {
    "questionText": "Jak działa *ngIf?",
    "answer": "",
    "tag": ["angular", "directive", "structural-directive"]
  },
  {
    "questionText": "Co to jest wstrzykiwanie zależności?",
    "answer": "",
    "tag": [
      "angular",
      "dependency-injection",
      "service",
      "providers",
      "injectable",
      "decorator"
    ]
  },
  {
    "questionText": "Co to są Services? Co zawierają? Do czego służą? Jak tworzymy? Jak zagnieżdżamy?",
    "answer": "",
    "tag": ["angular", "service"]
  },
  {
    "questionText": "Co to Hierarchical Injector? Jaka jest hierarchia?",
    "answer": "",
    "tag": [
      "angular",
      "service",
      "providers",
      "injectable",
      "dependency-injection"
    ]
  },
  {
    "questionText": "Ile Services należy mieć w aplikacji? Jak Services pośredniczy w komunikacji między komponentami?",
    "answer": "",
    "tag": ["angular", "service", "component", "data-binding", "event-emmiter"]
  },
  {
    "questionText": "Co to Router?",
    "answer": "",
    "tag": ["angular", "router", "module", "routing"]
  },
  {
    "questionText": "Co to Routes i jaka jest różnica między Routerem",
    "answer": "",
    "tag": ["angular", "router", "routes", "routing"]
  },
  {
    "questionText": "Jak mapować linki?",
    "answer": "",
    "tag": ["angular", "module", "router", "routes", "path", "routing"]
  },
  {
    "questionText": "Jak nawigować z pozycji template i z pozycji środka komponentu?",
    "answer": "",
    "tag": [
      "angular",
      "navigate",
      "router",
      "routes",
      "activated-route",
      "activated-route-snapshot",
      "routing",
      "relative-path"
    ]
  },
  {
    "questionText": "Jakie parametry może przyjmować \"navigate\"? ",
    "answer": "",
    "tag": [
      "angular",
      "navigate",
      "relative-to",
      "query-params",
      "fragment",
      "preserve-query-params",
      "query-params-handling",
      "routing"
    ]
  },
  {
    "questionText": "Jakie własności poza \"path\" i \"component\" przyjmuje obiekt Routes?",
    "answer": "",
    "tag": ["angular", "routes", "path", "routing", "redirect-to", "childrens"]
  },
  {
    "questionText": "Jak tworzyć odnośniki na inne strony z pozycji template? Jak stylować linki w nawigacji? jakie są dodatkowe opcje?",
    "answer": "",
    "tag": [
      "angular",
      "navigation",
      "navigate",
      "router-link",
      "router-link-active",
      "router-link-active-options",
      "exact",
      "routing"
    ]
  },
  {
    "questionText": "Jak mapować linki w oddzielnym pliku? Co to za plik?",
    "answer": "",
    "tag": ["angular", "module", "router", "routes", "path", "routing"]
  },
  {
    "questionText": "Jak przekazywać zmienne w linku?",
    "answer": "",
    "tag": [
      "angular",
      "module",
      "router",
      "routes",
      "path",
      "params",
      "query-params",
      "fragment",
      "preserve-query-params",
      "query-params-handling",
      "routing"
    ]
  },
  {
    "questionText": "Jak pobierać zmienne z linku??",
    "answer": "",
    "tag": [
      "angular",
      "module",
      "router",
      "routes",
      "path",
      "params",
      "subscribe",
      "query-params",
      "fragment",
      "preserve-query-params",
      "query-params-handling",
      "routing"
    ]
  },
  {
    "questionText": "Co to Fragments?",
    "answer": "",
    "tag": ["angular", "module", "router", "routes", "fragment", "routing"]
  },
  {
    "questionText": "Co queryParams?",
    "answer": "",
    "tag": ["angular", "module", "router", "routes", "query-params", "routing"]
  },
  {
    "questionText": "Jak zagnieżdżać linki?",
    "answer": "",
    "tag": [
      "angular",
      "module",
      "router",
      "routes",
      "path",
      "childrens",
      "routing"
    ]
  },
  {
    "questionText": "Jak przekierowywać niezmapowane linki?",
    "answer": "",
    "tag": [
      "angular",
      "module",
      "router",
      "routes",
      "path",
      "childrens",
      "nested-routes",
      "routing"
    ]
  },
  {
    "questionText": "Co to Guardy?",
    "answer": "",
    "tag": []
  },
  {
    "questionText": "Do czego służy funkcja apply i jak ją stosować?",
    "answer": "",
    "tag": ["javascript"]
  },
  {
    "questionText": "Różnica między klasą abstrakcyjną a interfejsem?",
    "answer": "",
    "tag": ["javascript", "typescript", "ogólne"]
  },
  {
    "questionText": "Zalety i wady TypeScript?",
    "answer": "TypeScript jest językiem mocno typowanym to znaczy że zmienne mają określone typy i nie możemy określonej zmiennej przypisać innego typy zmiennej. TypeScript pozwala tworzyć Interfejsy. Jest językiem kompilowanym do JavaScriptu (nie wykonuje się w przeglądarce) dlatego też nazywa się go supersetem Javascriptowym.",
    "tag": ["typescript"]
  },
  {
    "questionText": "Jakie znasz typy danych w TypeScriptcie",
    "answer": "string, number, any, null, undefined, object, array, boolean, enum, dodadkowo dla function: void, never. Dla funkcji także można ustawić co mają zwracać.let zmienna_string: string = \"janusz\";let zmienna_number: number = 42let zmienna_any: any = \"cokolwiek\";let zmienna_null: null = null;let zmienna_undefined;let zmienna_object: {imie: string, wiek: number} = { imie: \"Dominik\", wiek: 24 };let zmienna_array: [string | number] = [2, \"pies\"];let zmienna_array2: string[] = [\"raz\", \"costam\"];let zmienna_boolean : boolean = true;let zmienna_funkcja: (val1: string, val2: number) => number;function funkcja_never() : never { throw new Error(\"ta funkcja miala sie nie wykonać!!!! Cos poszlo nie tak:/\") }enum Kolory { Zielony, Niebieski, Czerwony }; let zmienna_Kolory: Kolory = Kolory.Zielony;function funkcja_void() : void { console.log(\"nic_nie_zwracam hehe\"); }function funkcja_zwraca_tablicę(costam: number) : number[] { var zmienna = [costam]; return zmienna; }",
    "tag": ["typescript"]
  },
  {
    "questionText": "",
    "answer": "",
    "tag": ["typescript"]
  }
]
