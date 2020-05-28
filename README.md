# INSTAMEDIA

Instamedia is a simple jQuery plugin inspired by Instafeed to retrieve media from a Instagram user using the new Instagram graph API.

## How to use

Just select your div using jQuery and use the plugin passing at least the accessToken parameter:

```js
$('#instagram-div').instamedia({
    access_token: '{{your-access-token}}'
})
```

## Parameters

Parameter | Type | Default | Description
--------- | ---- | ------- | -----------
**accessToken** | *String* | null | The user access token
**fields** | *Array* | ```['media_url', 'permalink']``` | The fields to be returned from the media 
**quantity** | *Integer* | 25 | How many media should be returned _**Max of 100**_
**slick** | *Object* | null | Settings for [Slick Carousel](https://kenwheeler.github.io/slick/, 'Check all settings here') _**If left null, Slick won't be used**_

## Full use example

```js
$('#instagram-div').instamedia({
    accessToken: '{{your-access-token}}',
    quantity: 32,
    fields: [
        'permalink',
        'media_url',
        'caption',
        'id'
    ],
    slick: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: false,
        fade: true
    }
})
```

For now doesn't matter the fields you ask to return, all the media will be displayed inside an _anchor_ tag with __blank_ target to that media.

I plan to implement a parameter to template actually, but for now it will only return the media inside an anchor tag.

> This is only the first version, I plan to make this plugin much more complete and cooler. 
