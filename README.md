# STARLINKER

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/BEIGELAKE/STARLINKER-UPDATED)

## Starlink Services Website
Welcome to the Starlink Services website! This README provides an overview of the project, including setup instructions, project structure, and key features.

## Table of Contents
- [Introduction](#introduction)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Pages](#pages)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

## Introduction
The Starlink Services website is a React-based application that provides information about professional Starlink installation and configuration services. The website features a clean and modern design, showcasing various services and features offered by the company.

## Project Structure
The project has the following structure:

```
.bolt/
    config.json
    prompt
.DS_Store
.env
.gitignore
eslint.config.js
index.html
media/
    .DS_Store
package.json
postcss.config.js
public/
    .DS_Store
src/
    App.tsx
    components/
        Footer.tsx
        Header.tsx
        ui/
            ...
    index.css
    lib/
        supabase.ts
    main.tsx
    pages/
        Book/
        Home/
        Services/
        Track/
    types/
        index.ts
    utils/
        booking.ts
        format.ts
        validation.ts
    vite-env.d.ts
supabase/
    migrations/
        ...
tailwind.config.js
tsconfig.app.json
tsconfig.json
tsconfig.node.json
vite.config.ts
```

### Key Directories and Files
- **`src`**: Contains the main source code for the application.
  - **`components/`**: Reusable UI components such as `Footer.tsx` and `Header.tsx`.
  - **`lib/`**: Library files, including `supabase.ts` for Supabase integration.
  - **`pages/`**: Page components for different routes, including Home and Services.
  - **`types/`**: TypeScript type definitions.
  - **`utils/`**: Utility functions for booking, formatting, and validation.
- **`public`**: Public assets and static files.
- **`supabase`**: Supabase configuration and migrations.
- **`tailwind.config.js`**: Tailwind CSS configuration.
- **`tsconfig.json`**: TypeScript configuration.

## Installation
To set up the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/starlink-services.git
   cd starlink-services
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file based on the `.env.example` file and configure your environment variables.

4. Start the development server:

   ```bash
   npm run dev
   ```

## Usage
To use the website, navigate to the development server URL (usually `http://localhost:3000`). You can explore different pages and features of the website.

## Components
### `ServiceCard`
The `ServiceCard` component displays information about a specific service. It is used in the Services page to showcase different service offerings.

```tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
}

export function ServiceCard({ title, price, description, features }: ServiceCardProps) {
  return (
    <div className="bg-gray-900 rounded-lg p-8 flex flex-col h-full">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <div className="text-3xl font-bold text-beige-300 mb-4">{price}</div>
      <p className="text-gray-300 mb-6">{description}</p>
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="h-2 w-2 bg-beige-300 rounded-full mr-3" />
            {feature}
          </li>
        ))}
      </ul>
      <Link to="/book" className="text-beige-300 hover:underline">
        Book Now
      </Link>
    </div>
  );
}
```

### `Features`
The `Features` component displays a list of key features of the services offered. It is used in the Home page.

```tsx
import React from 'react';
import { Wifi, Shield, Clock, Settings } from 'lucide-react';

const features = [
  {
    icon: Wifi,
    title: 'Expert Installation',
    description: 'Professional setup of your Starlink equipment for optimal performance'
  },
  {
    icon: Shield,
    title: 'Reliable Service',
    description: 'Guaranteed quality and after-installation support'
  },
  {
    icon: Clock,
    title: 'Quick Setup',
    description: 'Efficient installation process with minimal downtime'
  },
  {
    icon: Settings,
    title: 'Configuration',
    description: 'Complete system configuration and network optimization'
  }
];

export function Features() {
  return (
    <div className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
              <feature.icon className="h-12 w-12 mx-auto mb-4 text-beige-300" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
```

## Pages
### `Home`
The Home page is the landing page of the website. It includes components such as Hero, Features, and Newsletter.

```tsx
import React from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Newsletter } from './components/Newsletter';

export function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <Newsletter />
    </div>
  );
}
```

### `Services`
The Services page displays a list of services offered by the company. It uses the `ServiceCard` component to showcase each service.

```tsx
import React from 'react';
import { ServiceCard } from './components/ServiceCard';

const services = [
  {
    title: 'Full Installation',
    price: '₦50,000',
    description: 'Complete Starlink setup and installation service',
    features: [
      'Professional equipment mounting',
      'Cable management',
      'Network configuration',
      'Signal optimization',
      'Post-installation testing'
    ]
  },
  {
    title: 'Configuration',
    price: '₦20,000',
    description: 'Expert configuration of your Starlink system',
    features: [
      'Network setup',
      'WiFi optimization',
      'Device connection',
      'Speed testing',
      'Basic troubleshooting'
    ]
  },
  {
    title: 'Purchase',
    price: 'Contact Us',
    description: 'Get assistance with purchasing Starlink equipment',
    features: [
      'Purchase consultation',
      'Equipment recommendations',
      'Order assistance',
      'Delivery coordination',
      'Setup guidance'
    ]
  }
];

export function Services() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Our Services</h1>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          Professional Starlink installation and configuration services to get you connected to high-speed satellite internet
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
}
```

## Configuration
### Environment Variables
The project uses environment variables to configure various aspects of the application. Create a `.env` file based on the `.env.example` file and set the necessary variables.

### Tailwind CSS
The project uses Tailwind CSS for styling. You can customize the Tailwind configuration in the `tailwind.config.js` file.

## Contributing
We welcome contributions to the project! If you would like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes and commit them with a descriptive message.
4. Push your changes to your fork.
5. Create a pull request to the main repository.

## License
This project is licensed under the MIT License. See the `LICENSE` file for more information.

Thank you for using the Starlink Services website! If you have any questions or need further assistance, please feel free to contact us at beigelake@outlook.com
