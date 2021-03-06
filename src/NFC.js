import React, { Component } from 'react'
const ReactMarkdown = require('react-markdown')

const input = `
# Nocturnal Flight Calls

Nocturnal Flight Calls (NFCs) are a fascinating new area of research. In the past few decades, we've learned that many birds call during the night while flying over in migration. By using microphones that record these calls while we sleep, and computer software to analyze them and speed up the identification process, we can say with some certainty what kinds of birds are flying overhead. However, the field is still nascent.

Here in Vermont, we have a few hobbyists recording NFCs. In order to collect our knowledge in one location, Larry Clarfeld and I have recently set up [the NFC-VT email listserv](https://list.uvm.edu/cgi-bin/wa?A0=NFC). If you're interested in learning more about NFCs, get in touch.

My goal for this website is to showcase what birds we've seen, what birds we have clear identifications for, and what birds we don't. Hopefully, this site will become a resource for NFC stations and researchers here in Vermont and on the East coast.

## Species

- [Upland Sandpiper](/nfc-species/upsa)
- [Spotted Sandpiper](/nfc-species/spsa)
- [Solitary Sandpiper](/nfc-species/sosa)
- [Black-and-white Warbler](/nfc-species/baww)
- [Bay-breasted Warbler](/nfc-species/bbwa)
- [Canada Warbler](/nfc-species/cawa)
`

class NFC extends Component {
  render() {
    return (
      <div className="container-md page">
        <div className="row">
          <div className="col-md-8 col-sm-12 text-left">
            <ReactMarkdown source={input} />
          </div>
        </div>
      </div>
    )
  }
}

export default NFC