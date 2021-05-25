const templates = {
  pdf: [
    {
      id: 1,
      location: 't2.pdf',
      type: 'pdf',
      text: [
        {
          title: 'Field 1',
          textAlign: 'center',
          fontfamily: "Montserrat",
          x: 1500,
          y: 1100,
          size: 65,
        },
        {
          title: 'Field 2',
          textAlign: 'center',
          fontfamily: "Montserrat",
          x: 1070,
          y: 2000,
          size: 50
        },
      ]
    }
  ],
  png: [
    {
      id: 2,
      location: 't1.png',
      type: 'png',
      text: [
        {
          title: 'Field 1',
          textAlign: 'center',
          fontfamily: "Montserrat",
          x: 1357,
          y: 1101,
          size: 85,
        },
        {
          title: 'Field 2',
          textAlign: 'center',
          fontfamily: "Montserrat",
          x: 1208,
          y: 2000,
          size: 51
        },
      ]
    }
  ]
}

export default templates
