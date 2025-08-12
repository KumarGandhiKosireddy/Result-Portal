# ResPortal - Student Result Management System

A modern React application for managing student registrations, hall tickets, and results with a clean, responsive design built using Tailwind CSS.

## Features

- **Student Registration**: Complete student registration with photo upload
- **Hall Ticket Management**: Retrieve hall tickets using mobile number or email
- **Result Display**: View detailed student results with subject-wise marks
- **Admin Panel**: Manage student records with edit and delete functionality
- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop
- **Modern UI**: Clean, elegant interface with consistent styling

## Tech Stack

- **Frontend**: React 19.1.0
- **Styling**: Tailwind CSS 4.1.11
- **Routing**: React Router DOM 7.5.2
- **HTTP Client**: Axios 1.8.4
- **State Management**: React Context API

## Design System

The application uses a consistent design system with:

- **Color Palette**:
  - Primary: #4F46E5 (Indigo)
  - Success: #10B981 (Emerald)
  - Warning: #F59E0B (Amber)
  - Error: #EF4444 (Red)

- **Typography**:
  - Headings: Inter font, semibold weight
  - Body: Inter font, regular weight
  - Clean, readable text with proper contrast

- **Components**:
  - Rounded corners (rounded-2xl)
  - Soft shadows for depth
  - Consistent spacing (p-4 to p-6)
  - Hover effects and smooth transitions

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Navigate to the frontend directory:
   ```bash
   cd fend
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Backend Setup

Make sure the backend server is running on `http://localhost:5000` before using the application.

## Project Structure

```
fend/
├── src/
│   ├── Comps/           # React components
│   │   ├── Nav.js       # Navigation component
│   │   ├── Login.js     # Login form
│   │   ├── Reg.js       # Student registration
│   │   ├── Home.js      # Result display
│   │   ├── Hal.js       # Hall ticket retrieval
│   │   ├── Disp.js      # Student records display
│   │   ├── Edit.js      # Edit student records
│   │   ├── Logout.js    # Logout functionality
│   │   └── Ct.js        # Context provider
│   ├── App.js           # Main application component
│   ├── index.js         # Application entry point
│   └── index.css        # Global styles and Tailwind imports
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
└── package.json         # Dependencies and scripts
```

## Key Features

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Flexible grid layouts
- Touch-friendly interface

### Accessibility
- Semantic HTML structure
- Proper ARIA labels
- Keyboard navigation support
- High contrast ratios

### Performance
- Optimized Tailwind CSS builds
- Efficient component rendering
- Minimal bundle size

## Customization

### Colors
Modify the color palette in `tailwind.config.js`:

```javascript
colors: {
  primary: '#4F46E5',
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
}
```

### Components
Custom component classes are defined in `src/index.css`:

```css
@layer components {
  .btn-primary { /* Primary button styles */ }
  .input-field { /* Input field styles */ }
  .card { /* Card container styles */ }
}
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.
