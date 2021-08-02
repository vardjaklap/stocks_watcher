try:
                                             for x in stocks:
                                             for val in stocks[x]:
                                             response = finnhub_client.quote(val)
                                             response["name"] = str(val);
                                             response["type"] = str(x);
                                             data.append(response)
                                             with open('./stocky/latest_stocks.json', 'w') as json_file:
                                             json.dump(data, json_file)
                                             except:
                                             print("Unexpected error:", sys.exc_info()[0])