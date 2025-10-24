# 🐾 Pet Adoption - Angular Frontend

A modern, responsive web application for browsing and managing pet adoptions. Built with Angular 19 and Angular Material, this frontend provides an intuitive interface for viewing pets, managing adoption applications, and administering pet listings.

## ✨ Features

### User Features
- **Pet Browsing**: View all available pets with images and details
- **Advanced Search**: Filter pets by name, species, and breed
- **Pet Details**: View comprehensive information about each pet including image galleries
- **Adoption Applications**: Submit and track adoption application status
- **Responsive Design**: Fully responsive UI that works on desktop, tablet, and mobile

### Admin Features
- **Pet Management**: Create, edit, and delete pet listings
- **Application Review**: View and manage adoption applications
- **Status Updates**: Change pet and application statuses
- **Image Management**: Upload and manage pet images

## 🛠️ Technologies

- **Angular 19.0.5** - Frontend framework
- **Angular Material** - UI component library
- **TypeScript** - Programming language
- **RxJS** - Reactive programming
- **Angular CLI** - Development tooling
- **Azure Static Web Apps** - Hosting platform

### Key Dependencies
- `@angular/material` - Material Design components
- `ng-image-slider` - Image carousel component
- `@angular/forms` - Reactive forms
- `@angular/router` - Client-side routing

## 📦 Prerequisites

- **Node.js** 18.x or higher
- **npm** 9.x or higher
- **Angular CLI** 19.x

Install Angular CLI globally:
```bash
npm install -g @angular/cli
```

## 🚀 Installation

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/pet-adoption-frontend.git
cd pet-adoption-frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment

Update `src/environments/environment.ts` and `src/environments/environment.prod.ts`:

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080' // Your backend API URL
};
```

For production:
```typescript
export const environment = {
  production: true,
  apiUrl: 'https://pet-adoption-backend-api.azurewebsites.net'
};
```

## ⚙️ Configuration

### API Endpoints

The application connects to the following backend endpoints:

- `/pet` - Pet management
- `/AdoptionApp` - Adoption applications
- `/image` - Image management
- `/users` - User management
- `/comment` - Comments

Configure the base API URL in `src/environments/environment.ts`.

## 🏃 Running the Application

### Development Server

```bash
ng serve
```

Navigate to `http://localhost:4200/`. The application will automatically reload when you modify source files.

### Development Server with Custom Port

```bash
ng serve --port 4300
```

### Open Browser Automatically

```bash
ng serve --open
```

## 🔗 Backend Repository

This frontend application connects to a separate Spring Boot backend API.

**Backend Repository:** [Pet-Adoption-API](https://github.com/LozanovskaS/Pet-Adoption-API.git)

The backend provides RESTful endpoints for managing pets, adoption applications, users, comments, and images. Make sure the backend is running before starting the frontend application.

### Development Build

```bash
ng build
```

### Production Build

```bash
ng build --configuration production
```

Build artifacts will be stored in the `dist/` directory.

### Build with Custom Output Path

```bash
ng build --output-path=../backend/public
```

## 🧪 Testing

### Running Unit Tests

```bash
ng test
```

Unit tests are executed via [Karma](https://karma-runner.github.io).

### Running End-to-End Tests

```bash
ng e2e
```

*Note: You need to add an e2e testing framework of your choice.*

### Code Coverage

```bash
ng test --code-coverage
```

## 🌐 Deployment

### Deploy to Azure Static Web Apps

This application is configured for deployment to Azure Static Web Apps with GitHub Actions.

#### Automatic Deployment via GitHub

1. Push your code to GitHub
2. Create Azure Static Web App
3. Connect to your GitHub repository
4. Select build configuration:
   - **Build Presets**: Angular
   - **App location**: `/`
   - **Output location**: `dist/pet-adoption/browser`
5. GitHub Actions will automatically build and deploy on push

#### Manual Deployment

```bash
# Build for production
npm run build

# Deploy using Azure CLI
az staticwebapp deploy \
  --name pet-adoption-frontend \
  --resource-group pet-adoption-rg \
  --source-path dist/pet-adoption/browser
```

**Live Application:** `https://your-app-name.azurestaticapps.net`

## 🎨 Styling

The application uses:
- **Angular Material** for UI components
- **Custom CSS** for component-specific styling
- **Responsive design** using CSS Flexbox and Grid

### Material Theme

The Material theme is configured in `src/styles.css`:

```css
@import '@angular/material/prebuilt-themes/indigo-pink.css';
```

## 🐛 Troubleshooting

### Common Issues

**Issue**: `Port 4200 is already in use`
```bash
# Use a different port
ng serve --port 4300
```

**Issue**: `Module not found` errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Issue**: API connection errors
- Check that backend is running
- Verify `environment.apiUrl` is correct
- Check browser console for CORS errors

## 📚 Additional Resources

- [Angular Documentation](https://angular.dev)
- [Angular Material Components](https://material.angular.io)
- [Angular CLI Documentation](https://angular.dev/tools/cli)
- [RxJS Documentation](https://rxjs.dev)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👥 Authors

- **LozanovskaS** - Initial work

## 📧 Contact

For questions or support, please open an issue in the GitHub repository.

---

**Made with ❤️ for connecting pets with loving families** 🐶🐱🐰
