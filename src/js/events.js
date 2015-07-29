(() => {
  $(`.showOffices`).click(
    (() => {
      const overlay = $(`.overlay`)
      const body = $(`body`)
      let open = false

      return () => {
        if (!open) {
          overlay.addClass(`above opaque`)
          body.css(`overflow-y`, `hidden`)
          open = true
        }

        else {
          overlay.removeClass('opaque')
          body.css(`overflow-y`, `initial`)
          setTimeout(() => {
            overlay.removeClass('above')
            open = false
          }, 300)
        }
      }
    }())
  )
}())
