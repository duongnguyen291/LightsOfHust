# NextJS Tailwind Event Project

This project is a web application built with **Next.js** and **Tailwind CSS**. The application is designed to host and showcase student events, inspiring stories, learning experiences, and memorable moments at Hanoi University of Science and Technology.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Responsive Design**: Built with Tailwind CSS for a mobile-friendly experience
- **Tab Navigation**: Allows switching between image and video content
- **Dynamic Content Rendering**: Displays different types of event content based on user selection
- **SEO Optimized**: Each page has its own title and meta description for better SEO
- **Reusable Components**: Includes reusable components for content cards, navigation, and more

## Installation

### Prerequisites

Make sure you have **Node.js** and **npm** (or **yarn**) installed on your system.

### Steps

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser to `http://localhost:3000` to see the project in action**

## Usage

### Main Components

- **Tabs**: Navigate between "Image" and "Video" sections to see different types of event content
- **Content Cards**: Displays information about each event, such as title, description, and participant details
- **Navigation**: Easily accessible navigation bar to move between different pages of the site

### Customizing Event Content

The event content is located in the `src/app/event-content.tsx` file. You can modify the content for images and videos by updating the `EVENT_CONTENT_IMAGE` and `EVENT_CONTENT_VIDEO` arrays.

```javascript
const EVENT_CONTENT_IMAGE = [
  {
    title: "Inspiring Learning Journey",
    des: "An example story that highlights the journey of a student overcoming challenges in their studies.",
    name: "John Doe",
    position: "IT Student, HUST",
    panel: "Image",
    img: "/path/to/image.jpg",
  },
  // More content...
];
```

### Customizing the Page Title

To change the title that appears in the browser tab, update the `<Head>` component in `src/app/layout.tsx` or `src/app/index.tsx`.

## Project Structure

Here's a quick overview of the project structure:

```
.
├── public
│   ├── image              # Folder for static images
│   └── logos              # Folder for logos
├── src
│   ├── app
│   │   ├── about-event.tsx        # About the event page
│   │   ├── event-content.tsx      # Main content page with image and video tabs
│   │   ├── faq.tsx                # FAQ page
│   │   ├── layout.tsx             # Layout component for setting up Head and common layouts
│   │   ├── navbar.tsx             # Navigation bar component
│   │   ├── footer.tsx             # Footer component
│   │   └── index.tsx              # Home page
│   ├── components
│   │   ├── event-content-card.tsx # Component for displaying event content
│   │   ├── stats-card.tsx         # Component for displaying statistics
│   └── styles
│       └── globals.css            # Global styles
├── README.md              # Project documentation
├── tailwind.config.js     # Tailwind CSS configuration file
└── next.config.js         # Next.js configuration file
```

## Customization

### Tailwind CSS Configuration

You can customize Tailwind CSS settings by modifying the `tailwind.config.js` file. This file controls your color palette, fonts, and other Tailwind settings.

Example:

```javascript
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A',
      },
    },
  },
  plugins: [],
}
```

### Adding New Pages

To add a new page to the application:

1. Create a new `.tsx` file in the `src/app` directory
2. Define your component and add it to the navigation bar in `navbar.tsx` if needed

## Contributing

If you'd like to contribute, please fork the repository and make changes as you'd like. Pull requests are warmly welcome.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.