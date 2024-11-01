# Usage Instructions

## Step 1
Pull and enter git repository
```bash
git clone https://github.com/jbhaura/bpmn

cd bpmn
```

## Step 2
Install bundle dependencies
```bash
bundle
```

## Step 3
Create and migrate the database
```bash
bin/rails db:create

bin/rails db:migrate
```

## Step 4
Start rails server
```bash
bin/rails server
```

## Step 5
Go to `http://localhost:3000` (or whatever port the server is running on, its usually `3000`)
