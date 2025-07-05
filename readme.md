# Laravel Vue Starter
Starter Kit made with Laravel, Vue.js, and TypeScript.

## Development Environment Setup

### Prerequisites
- Docker Desktop
- Git

### Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd laravue-starter
   ```

2. **Copy environment file**
   ```bash
   cp .env.example .env
   ```

3. **Start Laravel Sail (Docker)**
   ```bash
   # Start the development environment
   ./vendor/bin/sail up -d
   
   # Or use the alias (if configured)
   sail up -d
   ```

4. **Install dependencies**
   ```bash
   # Install PHP dependencies
   ./vendor/bin/sail composer install
   
   # Install Node.js dependencies
   ./vendor/bin/sail npm install
   ```

5. **Generate application key**
   ```bash
   ./vendor/bin/sail artisan key:generate
   ```

6. **Run database migrations**
   ```bash
   ./vendor/bin/sail artisan migrate
   ```

7. **Start the frontend development server**
   ```bash
   # In a new terminal
   ./vendor/bin/sail npm run dev
   ```

### Useful Commands

```bash
# Stop the development environment
./vendor/bin/sail down

# Run artisan commands
./vendor/bin/sail artisan <command>

# Run composer commands
./vendor/bin/sail composer <command>

# Run npm commands
./vendor/bin/sail npm <command>

# Access the application container
./vendor/bin/sail shell

# View logs
./vendor/bin/sail logs
```

## Tech Stack
- **Backend**: Laravel 12, PHP 8.3
- **Frontend**: Vue.js 3, TypeScript
- **Database**: MySQL
- **Styling**: Tailwind CSS
- **Development**: Laravel Sail (Docker)

