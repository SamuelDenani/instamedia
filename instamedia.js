(function ( $ ) {

    $.fn.instamedia = function ( options ) {

        let settings = $.extend({
            fields: [
                'media_url',
                'permalink'
            ],
            quantity: 25,
            slick: null
        }, options),
            base_url = 'https://graph.instagram.com/me/media'

        const getMedia = () => {
            if(!settings.accessToken)
                throw 'Missing access token'

            $.ajax({
                url: `${base_url}?fields=${settings.fields.join(',')}&access_token=${settings.accessToken}&limit=${settings.quantity}`
            }).done(instagramMedia => {
                let allMedia = instagramMedia.data
    
                allMedia.forEach(media => {
                    this.append(`
                        <a href="${media.permalink}" target="_blank">
                            <img src="${media.media_url}">
                        </a>
                    `)
                });
    
                if(settings.slick)
                    this.slick(settings.slick)
            })
        }

        try {
            getMedia()
        } catch (error) {
            console.error(error)
        }

        return this
    }

} ( jQuery ))