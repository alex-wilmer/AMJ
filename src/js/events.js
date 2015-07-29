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
          setTimeout(() => {
            body.css(`overflow-y`, `overlay`)
            overlay.removeClass('above')
            open = false
          }, 300)
        }
      }
    }())
  )
}())
