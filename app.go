package main

import (
	"bufio"
	"context"
	"fmt"
	"os"
	"strings"

	"github.com/wailsapp/wails/v2/pkg/runtime"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

func (a *App) SelectFile() (filePath string) {
	filePath, err := runtime.OpenFileDialog(a.ctx, runtime.OpenDialogOptions{
		Filters: []runtime.FileFilter{{DisplayName: "CSV Files (*.csv)", Pattern: "*.csv"}},
	})
	if err != nil {
		fmt.Println("Error in file selection:", err)
	}
	return
}

func (a *App) ReadColumns(filePath string) []string {
	file, err := os.Open(filePath)
	defer func() {
		err := file.Close()
		panic(err)
	}()

	if err != nil {
		fmt.Println("Error in reading file:", err)
		return nil
	}

	var columns []string
	scanner := bufio.NewScanner(file)
	scanner.Scan()
	line := scanner.Text()
	for _, column := range strings.Split(line, ",") {
		if strings.TrimSpace(column) != "" {
			columns = append(columns, strings.ReplaceAll(column, "\"", ""))
		}
	}

	if err := scanner.Err(); err != nil {
		fmt.Println(err)
		return nil
	}

	return columns
}
