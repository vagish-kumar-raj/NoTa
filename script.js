// 1. Get the text value from the textarea
            const textareaText = document.getElementById("myTextarea").value;

            // 2. Create a Blob object with the text and specify the plain text MIME type
            const blob = new Blob([textareaText], { type: "text/plain" });

            // 3. Create a temporary URL pointing to the Blob
            const fileURL = URL.createObjectURL(blob);

            // 4. Create a temporary hidden anchor (<a>) element
            const downloadLink = document.createElement("a");
            downloadLink.href = fileURL;
            
            // Define the default filename for the downloaded file
            downloadLink.download = "my-text-file.txt"; 

            // 5. Hide the element, append it to the body, and trigger the click
            downloadLink.style.display = "none";
            document.body.appendChild(downloadLink);
            downloadLink.click();

            // 6. Clean up the DOM and revoke the object URL to save memory
            document.body.removeChild(downloadLink);
            URL.revokeObjectURL(fileURL);