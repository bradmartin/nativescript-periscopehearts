# NativeScript-PeriscopeHearts :two_hearts:
NativeScript plugin for Periscope's heart animation (Android Only for now...). Open source library used: [tyrantgit/HeartLayout](https://github.com/tyrantgit/HeartLayout)

## Sample

![Sample Hearts](periscopeHearts.gif)

## Installation
From your command prompt/termial go to your app's root folder and execute:

`npm install nativescript-periscopehearts`

## Usage
#### XML:
```XML
<Page class="coverImage" xmlns="http://schemas.nativescript.org/tns.xsd"
      xmlns:PeriscopeHearts="nativescript-periscopehearts" loaded="pageLoaded">
    <Page.actionBar>
    <ActionBar title="NativeScript-PeriscopeHearts" color="#fff" backgroundColor="#03A9F4" />
  </Page.actionBar>
    <ScrollView>
        <StackLayout>
            <button text="Add Heart" tap="newHeart" />

            <!-- This is our Heart "container" -->
            <PeriscopeHearts:PeriscopeHearts class="heartLayout" id="heartLayout" height="400" />     
            
        </StackLayout>
    </ScrollView>
</Page>
```

#### JS:
```JS
// Array of hex color strings
var colorArray = [
    { hex: "#3489db" },
    { hex: '#FF4081' },
    { hex: '#229911' },
    { hex: '#fff000' }
];

function newHeart(args) {
        var heartLayout = frame.topmost().currentPage.getViewById("heartLayout");

        // Just getting a random hex string from the colorArray values
        var rand = colorArray[Math.floor(Math.random() * colorArray.length)];

        // Call addHeart() on the PeriscopeHearts UI element to pop in a new heart
        heartLayout.addHeart(rand.hex);   
}
exports.newHeart = newHeart;
```

## API

**addHeart (color)** - *required*
 
Function that adds one heart into the view.
