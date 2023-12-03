$(".remove").on("click", function(){
    alert($(this).closest(".post").data().id)
  })


  $('button').on('click', function() {
    let relevantInputValue = $(this).closest("div").find("input").val()
    alert(relevantInputValue)
  })


//*******************************Ex1****************************************//
  
  $('button').on('click', function() {
    let relevantInputValue = $(this).closest("div").find("span").text()
    alert(relevantInputValue)
  })


   
  $('button').on('click', function() {
    let relevantInputValue = $(this).closest("div").find("p").text()
    alert(relevantInputValue)
  })

//*******************************Ex2****************************************//

    
  $('button').on('click', function() {
    const computerElement = $(this).closest('.computer');

    // Get the processor ID
    const processorId = computerElement.find('.processor').attr('id');

    // Get the data-id of the computer
    const dataId = computerElement.data('id');

    // Get the BUS number
    const busNumber = computerElement.find('.BUS').text();

    // Log the information to the console
    console.log('Processor ID:', processorId);
    console.log('Data ID:', dataId);

    // Log the BUS Number
    console.log('BUS Number:', busNumber);
  })